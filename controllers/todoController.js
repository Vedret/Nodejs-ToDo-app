const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://user:user123@ds111072.mlab.com:11072/todolist')

//create schema , this is like blueprint for our data
let todoSchema= new mongoose.Schema({
    item:String
})

let Todo=mongoose.model('Todo',todoSchema);

let urlencodedParser = bodyParser.urlencoded({ extended: false })
//let data=[{item:'get milk'},{item:'walk dog'},{item:'kick some ass'}];

module.exports=function(app){

    app.get('/todo' , function(req,res){

        //get data from mongodb and pass it to the view
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        })
        
    });

    app.post('/todo' ,urlencodedParser, function(req,res){
        //post data to mongodb
        let newTodo=Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        
    });

    app.delete('/todo/:item' , function(req,res){
        
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });


   
};