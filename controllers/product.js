const Product = require('../models/product');

const index = async (req, res) => {
    const {onPage, limit} = req.query;

    const products = await Product.find().skip(limit * (onPage - 1)).limit(limit);
    res.status(200).json(products);
}

const create = async (req, res, next) => {
    const {name, brand, stock, price, size, sex} = req.body;
    const {id} = req.admin;
    const assets = req.files;
    Product.create({
        name,
        brand,
        stock,
        price,
        size,
        sex,
        assets: assets.map(value => value.path),
        createdBy: id
    })
        .then(value => res.status(200).json({message: 'Success create product!'}))
        .catch(reason => next(reason));

}

const read = async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
}

const update = async (req, res, next) => {
    const {name, brand, stock, price, size, idSex} = req.body;
    const {id} = req.params
    const assets = req.files;
    Product.updateOne({_id: id}, {name, brand, stock, price, size, sex: idSex, assets: assets.map(value => value.path)})
        .then(_ => res.status(200).json({message: 'Success update product!'}))
        .catch(reason => next(reason))
}

const destroy = async (req, res, next) => {
    const {id} = req.params
    Product.deleteOne({_id: id})
        .then(_ => res.status(200).json({message: 'Success delete product!'}))
        .catch(reason => next(reason));
}

module.exports = {
    index,
    create,
    read,
    update,
    destroy,
}