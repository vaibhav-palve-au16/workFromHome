const slugify = require('slugify')
const Category = require('../models/category')
const create = async (req, res) => {
    try {
        const { name } = req.body
        if (!name.trim()) {
            return res.status(404).send("Please provide name and slug details ")
        }
        const existingCategory = await Category.findOne({ name })
        if (existingCategory) {
            return res.status(404).send({ message: "Data already present " })
        }
        const category = await new Category({ name, slug: slugify(name) }).save()

        res.json(category)
    } catch (error) {
        res.status(404).send(error)
    }
}
const update = async (req, res) => {
    try {
        const { name } = req.body
        const category = await Category.findByIdAndUpdate(req.params.categoryId, {
            name,
            slug: slugify(name)
        }, { new: true });
        res.status(201).send(category)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}
const remove = async (req, res) => {
    try {
        console.log(req.body);
        const category = await Category.findByIdAndDelete(req.params.categoryId);
        res.json(category)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}
const list = async (req, res) => {
    try {
        console.log(req.body);
        const all = await Category.find({})
        res.json(all)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}
const read = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);
        res.json(category)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = { create, update, remove, list, read }