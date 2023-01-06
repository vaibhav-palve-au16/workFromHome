const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { randomBytes } = require('crypto')

const app = express();
let PORT = 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ }))
app.use(cors())
let posts = {}
app.get("/posts", (req, res) => {
    res.send(posts)
})

app.post("/posts", (req, res) => {
    try {
        let { title } = req.body
        const id = randomBytes(4).toString('hex');
        posts[id] = {
            "id":id, 
            "title":title
        }
        console.log(req.body);
        res.status(200).send("data save in db " + {...posts})
    } catch (error) {
        res.send(error)
    }
})
app.listen(PORT, (req, res) => {
    console.log("port running on  Posts " + PORT)
})