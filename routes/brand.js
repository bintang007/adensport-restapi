const router = require('express').Router();
const {create} = require('../controllers/brand');

router.post('/', create);

module.exports = router;