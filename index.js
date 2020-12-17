require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('./middlewares/multer');
const cookieParser = require('cookie-parser');
const routes = require('./routes');


const PORT = process.env.PORT || 3000;
const app = express();

mongoose
    .connect('mongodb://localhost:27017/aden-sport-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(_ => console.log('Connected to DB'), reject => console.error(reject));

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(multer);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.use((onerror, req, res, next) => {
    res.status(400).json(onerror);
})

app.listen(PORT, _ => console.log(`Server run on port ${PORT}`));
