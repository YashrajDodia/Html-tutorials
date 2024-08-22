const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./Faculty.js');

mongoose
        .connect('mongodb+srv://YashrajDodia:Yashraj1069@yashrajcluster.c7pjt.mongodb.net/', {useNewUrlParser : true})
        .then(()=>{
            const app = express();
            app.use(bodyParser.urlencoded({extended : false}));

            app.get('/faculties',async(req,res)=>{
                faculties = await Faculty.find();
                res.send(faculties);
            })

            app.get('/faculties/:index',async(req,res)=>{
                facultybyindex = await Faculty.findOne({FacultyID:req.params.index});
                res.send(facultybyindex);
            })

            app.post('/faculties/addFac',async(req,res)=>{
                stu = new Faculty({...req.body});
                await stu.save();
                res.send("Faculty added");
            })

            app.patch('/faculties/:index', async(req,res)=>{
                const fac = await Faculty.findOne({FacultyID:req.params.index});
                fac.FacultyID = req.body.FacultyID;
                await fac.save();
                res.send("faculty updated");
            })

            app.delete('/faculties/:id',async (req,res)=>{
                await Faculty.deleteOne({FacultyID:req.params.id});
                res.send("Faculty Deleted");
            });

            app.listen(3031,(req,res)=>{
                console.log("Server started at : 3031");
            });
        })