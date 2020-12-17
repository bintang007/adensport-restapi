const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hashPassword = password => bcrypt.hashSync(password, salt);
const comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

module.exports = {
    hashPassword,
    comparePassword
}
