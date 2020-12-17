const jwt = require('jsonwebtoken');
const fs = require('fs');

const secretAdmin =  '@AbHDUj2!3J8J<H@!8';
const secretUser =  '@bJDbHDUj2!3J8J<H@!8'

const generateTokenUser = payload => jwt.sign(payload, secretUser);
const generateTokenAdmin = payload => jwt.sign(payload, secretAdmin);

const verifyTokenUser = token => jwt.verify(token, secretUser);
const verifyTokenAdmin = token => jwt.verify(token, secretAdmin);

module.exports = {
    generateTokenAdmin,
    generateTokenUser,
    verifyTokenAdmin,
    verifyTokenUser
}