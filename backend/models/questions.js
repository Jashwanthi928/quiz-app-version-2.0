const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const questionSchema= new Schema({
    any: Schema.Types.Mixed
})


module.exports=questions=mongoose.model('questions',questionSchema);