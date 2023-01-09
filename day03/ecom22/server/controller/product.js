const slugify = require('slugify');
const fs = require('fs');
const products = require('../models/product');
const Category = require('../models/category');
const create = async (req, res) => {
    try {
        const { name, description, price, categoryOfProduct, quantity, sold, shipping } = req.fields; // contains non-file fields
        const { photo } = req.files
        switch (true) {
            case !name.trim():
                res.json({ error: "Name is required" })
                break;
            case !description.trim():
                res.json({ error: "description is required" })
                break;
            case !price.trim():
                res.json({ error: "price is required" })
                break;
            case !quantity.trim():
                res.json({ error: "quantity is required" })
                break;
            case !sold.trim():
                res.json({ error: "sold is required" })
                break;
            case !shipping.trim():
                res.json({ error: "shipping is required" })
                break;
            case photo && photo.size < 100000:
                res.json({ error: "image is required and size should be 1 mb or less than" })
                break;
        }
        const categories = await Category.findById(categoryOfProduct)
        const {name:value} = categories;
        const product = new products({name, description, price, quantity, sold, shipping,category:slugify(value.toString()), slug: slugify(name) });
        if (photo && photo.path) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save()
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

const list = async (req, res) => {
    try {
        console.log(req.body);
        const all = await products
            .find({})
            .select('-photo')
            .limit(12)
            .sort({ createdAt: -1 })
            .populate("category")

        res.json(all)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const read = async (req, res) => {
    try {
        const product = await products.find({ slug: req.params.slug }).select("-photo").populate('category');
        res.json(product)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const photo = async (req, res) => {
    try {
        const product = await products.findById(req.params.productId).select("photo");
        if (product.photo.data) {
            res.set('Content-Type', product.photo.contentType)
            return res.send(product.photo.data)
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const update = async (req, res) => {
    try {
        const { name, description, price, categoryOfProduct, quantity, sold, shipping } = req.fields;
        const { photo } = req.files
        // switch (true) {
        //     case !name.trim():
        //         res.json({ error: "Name is required" })
        //         break;
        //     case !description.trim():
        //         res.json({ error: "description is required" })
        //         break;
        //     case !price.trim():
        //         res.json({ error: "price is required" })
        //         break;
        //     case !category.trim():
        //         res.json({ error: "category is required" })
        //         break;
        //     case !quantity.trim():
        //         res.json({ error: "quantity is required" })
        //         break;
        //     case !sold.trim():
        //         res.json({ error: "sold is required" })
        //         break;
        //     case !shipping.trim():
        //         res.json({ error: "shipping is required" })
        //         break;
        //     case photo && photo.size < 100000:
        //         res.json({ error: "image is required and size should be 1 mb or less than" })
        //         break;
        // }
        // const categories = await Category.findById(categoryOfProduct)
        // const {name:value} = categories;
        // console.log(categories);
        const product = await products.findByIdAndUpdate(req.params.productId,
            {
                name, 
                description, 
                price,
                quantity, 
                sold, 
                shipping,
                slug: slugify(name)
            }, { new: true });
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const remove = async (req, res) => {
    try {
        const product = await products
            .findByIdAndDelete(req.params.productId)
            .select("-photo");
        if (!product) {
            return res.status(404).send({ messag: "Data not found" })
        }
        res.json(product)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = { create, update, remove, list, read, photo }