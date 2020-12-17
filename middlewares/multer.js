
const multer = require('multer');

const maxSize =  10000;

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = multer({
    storage: diskStorage,
    fileFilter: fileFilter,
    limits: maxSize
}).array('assets', 4);