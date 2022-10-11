const express = require('express');
const router = express.Router();
const User = require("../models/User");
// const  {body} = require("express-validator");
// const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
var fetchUser = require('../middleware/fetchUser')

const JWT_SECRET = 'Shivam123Secured'
router.get("/",(req, res) => {
    res.send("hello router")
})


router.post("/register"
// [
//     body("name" , "Enter a valid name").isLength({ min: 5}),
//     body("email" , "Enter a valid email").isEmail(),
//     body("password" , "password must be at least 5 characters").isLength({ min: 5})
// ]
,
async (req,res) => {
    const {name,email,password,cpassword} = req.body;
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "fill every data"})
    }

    try {
        const userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(422).json({error: " User already exists"});
        }

        else if(password != cpassword){
            return res.status(422).json({error: "password are not matching"});

        }
        else{
            const user = new User({name,email,password,cpassword})
            const data = {
                user: {
                    id: user.id,
                }

            }

            
            const userRegister = await user.save()
            
            
            if(userRegister){
                const authToken = jwt.sign(data,JWT_SECRET)
                res.status(201).json({message: "User registration successful",authToken})
                // console.log(user)
                // console.log(mongoose.connection.readyState)
            }
            else{
                res.status(500).json({message: "User registration failed"})
            }
        }
        
    } catch (error) {
        console.log(error);
        
    }
})

//login

router.post('/login',
  async(req, res) => {

    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({error: 'fill all data'})
        }
        
        const user = await User.findOne({email: email});
       if(user) {
        //  console.log(password)
        //  console.log(user.password)
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch) {
            const data = {
                user: {
                    id: user.id,
                }
    
            }
            const authToken = jwt.sign(data,JWT_SECRET)
           
            res.json({message: "user loggedin",authToken})
        } 
        else{
          res.status(400).json({error: 'Invalid Credentials1'})

        }
       } else {
        res.status(400).json({error: 'email does not exist'})
       }
       

    } catch (error) {
        console.error(error)
    }
})

router.post("/getUser",fetchUser,async(req,res) => {
    try {

        userId = req.user.id
        let user = await User.findById(userId).select("-password").select("-cpassword")
        res.send(user)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router