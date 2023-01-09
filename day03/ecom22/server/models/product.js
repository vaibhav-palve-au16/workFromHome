const mongoose = require('mongoose');
const products = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 160
    },
    slug: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true
    },
    category: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'category',
        type:String,
    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model("Product",products)