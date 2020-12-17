const User = require('../models/user');
const {comparePassword} = require('../helpers/bcrypt');
const {generateTokenUser} = require('../helpers/jwt');

const login = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username})
    if (user && comparePassword(password, user.password)) {
        res.cookie('token', generateTokenUser({
            id: user._id,
            username: user.username,
        }), {httpOnly: true});
        res.status(200).json({message: 'Login Successfully!'});
    } else {
        res.status(200).json({message: 'username atau password salah'});
    }
}

const register = async (req, res, next) => {
    const {username, email, password} = req.body;
    User.create({username, email, password})
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