const User = require('../models/user');

const addProductToCart = async (req, res, next) => {
    const {productId} = req.params;
    const {id} = req.user;
    User.updateOne({_id: id}, {
        "$push": {
            cart: {
                product: productId,
                total: 1
            }
        }
    })
        .then(_ => res.status(200).json({message: 'Add product to card success!'}))
        .catch(reason => next(reason));
}

const removeProductInCard = async (req, res, next) => {
    const {productId} = req.params;
    const {id} = req.user;
    User.updateOne({_id: id}, {
        "$pull":{
            cart: {product: productId}
        }
    })
        .then(_ => res.status(200).json({message: 'Remove product in cart success!'}))
        .catch(reason => next(reason));
}

const plusTotalProductInCart = async (req, res, next) => {
    const {productId} = req.params;
    const {id} = req.user;
    User.updateOne({_id: id, "cart.product": productId}, {
        "$inc": {
            "cart.$.total": 1
        }
    })
        .then(_ => res.status(200).json({message: 'Plus product in cart success!'}))
        .catch(reason => next(reason));
}

const minusTotalProductInCart = async (req, res, next) => {
    const {productId} = req.params;
    const {id} = req.user;
    User.updateOne({_id: id, "cart.product": productId, "cart.total": {$gt: 0}}, {
        "$inc": {
            "cart.$.total": -1
        }
    })
        .then(_ => res.status(200).json({message: 'Minus product in cart success!'}))
        .catch(reason => next(reason));
}

module.exports = {
    addProductToCart,
    removeProductInCard,
    plusTotalProductInCart,
    minusTotalProductInCart
}