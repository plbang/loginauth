// IMPORT MODULES
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//IMPORT ROUTES
const userRoutes = require("./routes/userRoutes")



app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// MONGODB SETUP
// localhost should be linked to MongoDB Atlas rather than mongodb://localhost/MyDatabase
mongoose.connect('mongodb+srv://phillip:123@cluster0-hvpeb.mongodb.net/test?authSource=yourDB&w=1', { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DATABASE CONNECTED !!!")
});


// USE ROUTES
//localhost:3000/user
app.use("/user", userRoutes)

app.listen(port , () => console.log('App listening on port ' + port));



