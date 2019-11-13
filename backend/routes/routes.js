const express=require('express');
const router =express.Router();
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const questions=require('../models/questions');


router.get('/',(req,res)=>{
questions.find({})
                    .then(question=>{
                        if(question)
                        return res.json(question);
                        return res.status(404)
                    })
                    .catch(err=>console.log('Error'+err));
})
module.exports=router;