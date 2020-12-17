const {verifyTokenAdmin, verifyTokenUser} = require('../helpers/jwt');
const Product = require('../models/product');

const authenticationAdmin = async (req, res, next) => {
    try {
        req.admin = verifyTokenAdmin(req.cookies.token);
        next();
    } catch {
        res.status(401).json({message: 'You need to login'})
    }
}
const authenticationUser = async (req, res, next) => {
    try {
        req.user = verifyTokenUser(req.cookies.token);
        next();
    } catch {
        res.status(403).json({message: 'You need to login'})
    }
}

const authorizationAdminProduct = async (req, res, next) => {
    const {id} = req.admin;
    const {productId} = req.params;
    Product.findOne({_id: productId})
        .then(product => {
            if (product) {
                if (product.createdBy == id) {
                    next()
                } else {
                    res.status(401).json({message: `You don't have permission`})
                }
            } else {
                res.status(404).json('Not Found');
            }
        })
}

const authorizationUserCart = async (req, res, next) => {
    const {productId} = req.body;
    const {id} = req.user;

}

module.exports = {
    authenticationAdmin,
    authenticationUser,
    authorizationAdminProduct,
}