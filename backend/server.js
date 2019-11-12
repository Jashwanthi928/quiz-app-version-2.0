const express =require('express');
const mongoclient=require('mongodb').MongoClient;
const url=require('./config/config.js').url;

  
const app=express();

mongoclient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },(err,data)=>{
    if(err)
    console.log(err);
else{
    const database=data.db("test");
    require('./routes/index.js')(app,database);}
});

const port=8000;
app.listen(port,(req,res)=>{
    console.log('server is running in port 8000');
});

