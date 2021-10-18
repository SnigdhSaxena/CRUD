const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/crud'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

const crud = require('./routes/function')
app.use('/function',crud)

app.listen(9000,() => {
    console.log('Server started')
})
