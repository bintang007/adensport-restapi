const router = require('express').Router();
const {login, register, logout} = require('../controllers/user');
const productRoute = require('./product');
const cartRoute = require('./cart');
const {authenticationUser} = require('../middlewares/auth');

router.post('/login', login);
router.post('/register', register);
router.use('/products', productRoute);

router.use(authenticationUser);
router.post('/logout', logout);
router.use('/cart', cartRoute);

module.exports = router;