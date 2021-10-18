const express = require('express')
const router = express.Router()
const database = require('../models/schema')

router.get('/', async(req,res)=>{
    try{
        const student = await database.find()
        res.json(student)
    }
    catch(err){
        res.send('Error ' + err )
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const student = await database.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error ' + err )
    }
})

router.post('/', async(req,res)=>{
    const student = new database({
        name: req.body.name,
        rollno: req.body.rollno,
        pass: req.body.pass
    })

    try{
        const stud1 = await student.save()
        res.json(stud1)}
    catch(err){
        res.send('Error')
    }
    
})

router.patch('/:id', async(req,res)=>{
    try{
        const student = await database.findById(req.params.id)
        student.pass = req.body.pass
        const stud1 = await student.save()
        res.json(stud1)
    }
    catch(err){
        res.send('Error '+err)
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const student = await database.deleteOne({id:req.params.id})
        res.send('Deleted')
    }
    catch(err){
        res.send('Error '+err)
    }
})

module.exports = router