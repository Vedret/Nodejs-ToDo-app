const express=require('express');
const todoController=require('./controllers/todoController');

let app=express();

const port=process.env.PORT ||3000;

//set up template engine
app.set('view engine','ejs');

app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(port ,()=>{
    console.log(`You are listening port ${port}`);
});

