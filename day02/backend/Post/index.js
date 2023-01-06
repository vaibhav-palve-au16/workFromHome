const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { randomBytes } = require('crypto')
const axios = require('axios')

const app = express();
let PORT = 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({}))
app.use(cors())
let posts = {}
app.get("/posts", (req, res) => {
    res.send(posts)
})

app.post("/posts", async (req, res) => {
    try {
        let { title } = req.body
        const id = randomBytes(4).toString('hex');
        posts[id] = {
            "id": id,
            "title": title
        }
        await axios.post('http://localhost:4005/event', {
            type:"PostCreated",
            data:{id, title}
        })
        console.log(posts);
        res.status(201).send(posts)
    } catch (error) {
        res.send(error)
    }
})

app.post('/events', async(req, res)=>{
    let{type, data} = req.body
    console.log(data);
    res.end()

})

app.listen(PORT, (req, res) => {
    console.log("port running on  Posts " + PORT)
})