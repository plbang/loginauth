const router = require('express').Router();
const userController = require("../controller/userController")

// localhost:3000/user/login
router.post("/login", userController.login)
// router.post("/login", (req,res) => {

// })

// localhost:3000/user/signup
// use POST when you want to create a new resource
router.post("/signup", userController.signup)

// get all notes for specific user
// localhost:3000/user/getUserInfo
router.get("/getUserInfo", userController.getAllNotes)
// ON YOUR FRONT-END 
// use componentDidMount to access this endpoint

// push all notes from the front-end to our back-end depending on the specific user
// use PUT when you want to append an existing resource
// localhost:3000/user/pushNotes

router.put("/pushNotes", userController.pushNotes)

module.exports = router