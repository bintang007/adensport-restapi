const {model, Schema} = require('mongoose');

const brandSchema = new Schema(
    {
        name: String,
        urlLogo: String,
        urlBrand: String
    },
    {timestamps: true}
)

module.exports = model('Brand', brandSchema);