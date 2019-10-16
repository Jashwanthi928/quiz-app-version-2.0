const express =require('express');
const mongoclient=require('mongodb').MongoClient;
const url=require('./config/config.js').url;

const app=express();

mongoclient.connect(url,(err,database)=>{
    if(err)
    console.log(err);
});

const port=8000;
app.listen(port,(req,res)=>{
    console.log('server is running in port 8000');
});

