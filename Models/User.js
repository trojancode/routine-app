const { default: mongoose, model } = require("mongoose");

const User = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    }
})

module.exports = User = mongoose.model("User",User)