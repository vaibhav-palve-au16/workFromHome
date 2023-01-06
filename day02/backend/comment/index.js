const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto')
let PORT = 8080
const app = express()

let commentsByPostID = {}
app.use(bodyParser.json())
app.use(cors())
app.get("/posts/:id/comments", (req, res) => {

    res.send(commentsByPostID[req.params.id] || [])
})
app.post("/posts/:id/comments", (req, res) => {
    try {
        let commentid = randomBytes(4).toString('hex')
        let { content } = req.body
        const comments = commentsByPostID[req.params.id] || []
        comments.push({ id: commentid, content })
        commentsByPostID[req.params.id] = comments
        res.status(200).send(JSON.stringify(comments))
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, (req, res) => {
    console.log("started server here "+ PORT)
})