// This is where the logic goes

const bcrypt = require('bcrypt');
const saltRounds = 10; // 10 layers of encryption
const userModel = require("../models/userModels")

const userController = {

    // localhost:3000/user/login
    login: (req,res) => {

        const email = req.body.email;
        const inputPassword = req.body.password;

        // find user with email from req.body
        userModel.find({ email: email}, (err,user) => {
            // bring me the email and encrypted pass from database
            const { email, password }  = user[0] 

            // true or false
            const validUser = bcrypt.compareSync(inputPassword, password) 

            // if user is valid, then we return back the whole user
            validUser ? res.json(user) : res.json("invalid account")
        })
    },
    
    // localhost:3000/user/signup
    signup: (req,res) => {
        // we obtain data from request
        // const {email, password} = req.body
        const email = req.body.email;
        const password = req.body.password;

        // we encrypt password
        const hash = bcrypt.hashSync(password, saltRounds);

        // we insert to database
        userModel.create({
            email: email,
            password : hash
        }, (err, user) => {
            // if we have an error we res.json error else user
            err ? res.json(err) : res.json(user)
        })
    },

    // get all notes for the specific user
    getAllNotes: (req,res) => {
        // find the user by their email

        // response back with the notes array only related to that specific user
    },



    // update userInfo
    // obtain the information to be pushed from req.body, and also their email.
    // push that information into our array notes
    pushNotes: (req,res) => {

    }, 


}

module.exports = userController