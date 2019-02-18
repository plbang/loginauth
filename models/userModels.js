const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userModel = new Schema({
      email: {
          type: String, 
          unique: true 
          },
      password: String,
      notes: [
        {
          title : String,
          description : String
        }
      ]
    });

const User = mongoose.model('User', userModel);

// User validation to eliminate duplicate user
userModel.plugin(uniqueValidator);

module.exports = User;