const {model, Schema} = require('mongoose');
const {hashPassword} = require('../helpers/bcrypt');

const {Types} = Schema;

const cartSchema = new Schema({
    product: {
        type: Types.ObjectId,
        ref: 'Product'
    },
    total: Number
})

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        cart: [cartSchema]
    },
    {timestamps: true}
);

userSchema.pre('save', function (next) {
    this.password = hashPassword(this.password);

    next();
});

module.exports = model('User', userSchema);

