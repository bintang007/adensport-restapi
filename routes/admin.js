const router = require('express').Router();
const {login, register, logout} = require('../controllers/admin');
const productRoute = require('../routes/product');
const {authenticationAdmin} = require('../middlewares/auth');
const brandRoute = require('../routes/brand');

router.post('/login', login);
router.post('/register', register);
router.use(authenticationAdmin);
router.post('/logout', logout);
router.use('/products', productRoute);
router.use('/brands', brandRoute);

module.exports = router;