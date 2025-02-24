const express = require('express')
const app = express()
app.use(express.json())
users=[]

app.get('/',(req,res)=>{
    res.json('Server is Running')

})

app.post('/add-user',(req,res)=>{
    const {username,password} = req.body
    if(!username){
        res.status(400).json("Username cannot be empty")
    }
    if (!password){
        res.status(400).json("Password cannot be empty")
    }
        users.push(username,password)
        res.status(201).json("User created")

    
})

app.get('/users',(req,res)=>{
    res.json(users)
})

app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`)
   
})