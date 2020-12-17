const cartController = require('../controllers/cart');
const router = require('express').Router();

router.get('/:productId/add', cartController.addProductToCart);
router.get('/:productId/remove', cartController.removeProductInCard);
router.get('/:productId/plus', cartController.plusTotalProductInCart);
router.get('/:productId/minus', cartController.minusTotalProductInCart);

module.exports = router;
