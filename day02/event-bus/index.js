const express = require("express");
const bodyParser = require("body-parser")
const axios = require('axios');
const cors = require("cors");
const app = express()
let PORT = 4005
app.use(cors())
app.use(bodyParser.json())

app.post("/event",async (req, res) => {
    try {
        const event = req.body;
        console.log(event);
        await axios.post('http://localhost:4000/events', event);
        await axios.post('http://localhost:4001/events', event);
        await axios.post('http://localhost:4002/events', event);
        res.send({ status: 'Ok' });
    } catch (error) {
        // console.log(error);
        res.send(error)
    }
})

app.listen(PORT, (req, res) => {
    console.log('Listing on 4005 event server on event bus');
})