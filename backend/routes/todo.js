const express = require('express');
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const Todo = require("../models/todoData")


//fetchtodo
 router.get("/fetchtodo",fetchUser,async (req, res) => {
     try {
         const todos = await Todo.find({user: req.user.id})
         res.json(todos);
     } catch (error) {
         console.log(error)
     }
 })

 //addtodo
  
 router.post("/addtodo",fetchUser,async (req, res) => {
     try {
         const {title,description} = req.body;
       const todo = new Todo({title, description,user: req.user.id});
       const saveTodo = await todo.save();
       res.json(saveTodo);
     } catch (error) {
         console.log(error)
     }
 })

 //update todo
 router.put("/updatetodo/:id",fetchUser,async (req, res) => {
     const {description,title} = req.body;
     try {
         const newTodo = {};
         if(title){
             newTodo.title = title;
         }
         if(description){
             newTodo.description = description;
         }

         let todo = await Todo.findById(req.params.id);
         if(!todo){
             res.status(404).send("not found")
         }
         if(todo.user.toString()!== req.user.id){
             return res.status(401).send("Not Allowed")
         }
         todo = await Todo.findByIdAndUpdate(
             req.params.id ,
             {$set: newTodo},
             {new: true}
         )
         res.json({ todo})
     } catch (error) {
         console.log(error);
     }
 })


 //delete todo
 router.delete("/deletetodo/:id",fetchUser,async (req, res) => {
     try {
         let todo = await Todo.findById(req.params.id);
         if(!todo) {
             res.status(404).send("Not found")
         }
         if(todo.user.toString() !== req.user.id) {
             return res.status(401).send("Not Allowed")
         }

         todo = await Todo.findByIdAndDelete(req.params.id);
         res.json({ Success: "Note has been deleted",todo: todo})
     } catch (error) {
         console.log(error);
         
     }
 })

module.exports = router;