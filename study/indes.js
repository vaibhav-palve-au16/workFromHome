const express = require('express'); 
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var  data  = [1,2,3,4,5]


app.get('/', (req, res)=>{
  res.send({message : data })
});

app.post('/', (req, res)=>{
  const {user} = req.body 
  console.log(data);
  data.push(user)
  console.log(data);
  res.send({message : data })
})

app.delete("/", (req, res)=>{
  data.pop()
  console.log(data);
  res.send({message : data })
})

app.listen(3000,()=>{
  console.log('server started');
});

