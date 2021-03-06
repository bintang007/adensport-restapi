const router = require('express').Router();
const userRoute = require('./user');
const adminRoute = require('./admin');
const productRoute = require('./product');
const {authenticationAdmin,authenticationUser,} = require('../middlewares/auth');

router.use('/user', userRoute);
router.use('/admin', adminRoute);

module.exports = router;