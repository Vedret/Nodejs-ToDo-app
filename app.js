const express=require('express');
const todoController=require('./controllers/todoController');

let app=express();

//set up template engine
app.set('view engine','ejs');

app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening port 3000');
