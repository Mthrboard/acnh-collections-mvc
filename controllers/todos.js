const User = require('../models/User')

module.exports = {
     getTodos: async (req,res)=>{
        try{
            res.render('todos.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    /*createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.completeIdFromJSFile, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.completeIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    } */
    addDivId: async (req, res) =>{
        try{
          await User.findOneAndUpdate({_id: req.body.userId},
            { $addToSet: { completedDivs: req.body.divId }
          })
          res.json('Added Div ID')
        } catch(err) {
          console.log(err)
        }
    },

    removeDivId: async (req, res) =>{
        try{
          await User.findOneAndUpdate({_id: req.body.userId},
            {$pull: { completedDivs: req.body.divId}
          })
          res.json('Removed Div ID')
        } catch(err) {
          console.log(err)
        }
    }
}