const router = require('express').Router();
const {read, destroy, index, create, update} = require('../controllers/product');
const {authenticationAdmin,authorizationAdminProduct} = require('../middlewares/auth');

router.get('/', index);
router.get('/:id', read);
router.use(authenticationAdmin);
router.post('/', create);
router.use(authorizationAdminProduct)
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
