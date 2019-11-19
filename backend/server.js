const express =require('express');
const mongoose=require('mongoose');
const url=require('./config/config.js').url;
const questions=require('./routes/routes');
const cors=require('cors');
const app=express();
app.use(cors());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(()=>console.log("Mongodb connected"))
                    .catch(()=>console.log("Error connecting mongodb"))
const port=8000;
app.listen(port,(req,res)=>{
    console.log('server is running in port 8000');
});
app.use('/questions',questions);


