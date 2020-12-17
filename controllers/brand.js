const Brand = require('../models/brand');

const create = async (req, res, next) => {
    const {name, urlLogo, urlBrand} = req.body;

    await Brand.create({name, urlLogo, urlBrand})
        .then(value => res.status(200).json({message: 'Created Brand Success!'}))
        .catch(reason => next(reason));
}

module.exports = {
    create
}
