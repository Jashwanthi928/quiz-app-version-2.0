const express =require('express');
const mongoclient=require('mongodb').mongoclient;

const app=express();

const port=8000;
app.listen(port,(req,res)=>{
    console.log('server is running in port 8000');
});
