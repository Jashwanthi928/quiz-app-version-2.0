const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const questionSchema= new Schema({
    any: Schema.Types.Mixed
})

questionSchema.set('collection','quizon');

module.exports=mongoose.model('quizon',questionSchema);