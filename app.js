const express = require('express');
const app = express();  
app.get('/', (req,res)=>{
  res.send("i love coding")
})

// register the user
app.post('/api/users/register', (req,res)=>{
  res.send("register user")
})
// login the user

app.post('/api/users/login', (req,res)=>{
  res.send("login the  user")
})
// check the user
app.get('/api/users/check', (req,res)=>{
res.send("check user")
})









app.use(express.static("apple"))
port = 3000
app.listen(port, (err)=>{
  if(err){
    console.log(err.message)

  }
  console.log(`list on ${port}`)
});