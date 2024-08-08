const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const arr = ['yashraj' , 'prince' , 'prem' , 'jigar' , 'pratham'];

app.get('/sdetails',(req,res)=>{
    res.send(arr);
})

app.get('/:index',(req,res)=>{
    res.send(arr[req.params.index]);
})

app.delete('/:id',(req,res)=>{
    const idToEdit = arr.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    arr.splice(idToEdit,1);
    res.send("Student deleted");
});

app.patch('/editstudent/:name',(req,res)=>{
    
});

app.post('/addstudent/:name',(req,res)=>{
    arr.push(req.params.name);
    res.send("Student added");
});


app.listen(3030,(req,res)=>{
    console.log("Hello World");
});