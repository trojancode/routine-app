const { default: mongoose, model } = require("mongoose");
const { AppSchema } = require("./App");
const App = require("./App");

const mode = mongoose.Schema({
    name:{
        type:String,
    },
    icon:{
        type:String,
    },
    allowedApps:{
        type:[AppSchema],
        default:[]
    }
})

module.exports = Mode = mongoose.model("Mode",mode)