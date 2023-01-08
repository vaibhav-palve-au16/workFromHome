require("dotenv").config
const express = require('express');
const bodyPaser = require('body-parser')
const cors = require('cors');
const morgan = require("morgan")
const { connect } = require('./connection/connection');
const route = require("./router/auth");

const app = express()

app.use(bodyPaser.json())

app.use(cors())

app.use(morgan("dev"))

app.use('/user', route)

app.get('/', (req, res) => {
    res.json({ OK: "OK" })
})

app.listen(process.env.PORT, async (req, res) => {
    await connect()
    console.log("started ");
})