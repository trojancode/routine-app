const { default: mongoose, model } = require("mongoose");

const app = mongoose.Schema({
    name:{
        type:String,
    },
    appid:{
        type:String,
        unique:true
    }
})
module.exports = {
    AppSchema:app,
    App: mongoose.model("App",app)
}