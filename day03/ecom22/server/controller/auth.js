require('dotenv').config()
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const user = require('../models/user');

const register = async (req, res) => {
    try {
        const { name, email, password, address, role } = req.body
        if (!name.trim()) {
            return res.json({ error: "Name is required" })
        }
        if (!email) {
            return res.json({ error: "Email is taken" })
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be least lan 6 digit" })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(402).send({ error: "already exist user " })
        }
        const passwordHash = await hashPassword(password)
        const user = await new User({ name, email, password: passwordHash, address, role }).save()
        const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, { expiresIn: '7d' })
        res.status(201).json({
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                address: user.address.toString()
            },
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).send({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.status(401).send({ email: "Please provide mail id " })
        } if (!password || password.length < 6) {
            return res.json({ error: "Password wrong" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(403).send({ message: "user not present" })
        }
        const validePassword = await comparePassword(password, user.password)
        if (!validePassword) {
            return res.status(404).send({ message: "User Not Found" })
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, { expiresIn: '7d' })
        res.status(201).json({
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                address: user.address.toString()
            },
            token
        })
    } catch (error) {
        console.log(error);
    }

}

const admin = async (req, res) =>{
    res.send("ok")
}
module.exports = { register, login, admin }
