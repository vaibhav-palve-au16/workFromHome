const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto')
const axios = require('axios')
let PORT = 4001
const app = express()

let commentsByPostID = {}
app.use(bodyParser.json())
app.use(cors())
app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostID[req.params.id] || [])
})
app.post("/posts/:id/comments", async(req, res) => {
    try {
        let commentid = randomBytes(4).toString('hex')
        let { content } = req.body
        const comments = commentsByPostID[req.params.id] || []
        comments.push({ id: commentid, content })
        commentsByPostID[req.params.id] = comments
        await axios.post('http://localhost:4005/event',{
            type:'CommentCreate',
            data:{commentid, content, PostId:req.params.id}
        })
        console.log(comments);
        res.status(200).send(comments)
    } catch (error) {
        console.log(error.message);
        console.log(error)
    }

})

app.post('/events',(req, res)=>{
    let{type, data} = req.body
    console.log(data);
    res.end()
})

app.listen(PORT, (req, res) => {
    console.log("started server on comment "+ PORT)
})