const mongoose=require('mongoose');
// create a schema
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 255,
      },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
      },
    
});
// create a model
const User=mongoose.model("User",userSchema);