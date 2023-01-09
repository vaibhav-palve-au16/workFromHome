const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, unique: true, maxLength: 32, required: true },
        slug:{ type:String, unique:true, lowercase:true }
    }
)
module.exports = mongoose.model('category', categorySchema) 