module.exports = (app, database) =>{
 {  app.get('/', (req, res) => {    const details = { "username":"Ajith"};   
  database.collection('users').findOne(details, (err, item) => {     
      if (err) {        res.send({'error':'An error has occurred'});      } 
 else {        res.send(item);   
console.log(item);   }    });  })}};
