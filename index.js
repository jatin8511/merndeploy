const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const UserRoutes = require('./routes/User')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config()
require('./config/conn')

app.use(UserRoutes)

app.use(express.static(path.join(__dirname,'../frontend/build')))
app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})
app.listen(8080,()=>console.log('running on 8080'))