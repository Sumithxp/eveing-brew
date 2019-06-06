const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    ProductId: Number,
    ProductName: String,
    ProductPrice: Number
}, {
        timestamps: true
    });

module.exports = mongoose.model('product', ProductSchema);