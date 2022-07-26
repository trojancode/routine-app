const { default: mongoose, model } = require("mongoose");

const user = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    }
})

module.exports = User = mongoose.model("User",user)