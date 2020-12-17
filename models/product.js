const {model, Schema} = require('mongoose');
const {Types} = Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: Types.ObjectId,
            ref: 'Brand'
        },
        stock: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        assets: [String],
        createdBy: {
            type: Types.ObjectId,
            ref: 'User'
        }
    }, {timestamps: true}
)

module.exports = model('Product', productSchema);
