const Admin = require('../models/admin');
const {comparePassword} = require('../helpers/bcrypt');
const {generateTokenAdmin} = require('../helpers/jwt');

const login = async (req, res) => {
    const {username, password} = req.body;
    const admin = await Admin.findOne({username})
    if (admin && comparePassword(password, admin.password)) {
        res.cookie('token', generateTokenAdmin({
            id: admin._id,
            username: admin.username,
        }), {httpOnly: true});
        res.end();
    } else {
        res.status(200).json({message: 'username atau password salah'});
    }
}

const register = async (req, res, next) => {
    const {username, email, password} = req.body;
    Admin.create({username, email, password})
        .then(_ => res.end())
        .catch(reason => next(reason));
}

const logout = async (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Logout Successfully!'});
}

module.exports = {
    login,
    register,
    logout
}