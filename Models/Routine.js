const { default: mongoose, model } = require("mongoose");

const routine = mongoose.Schema({
    name: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    start_time: {
        hr:{
            type:Number,
            required:true,
        },
        min:{
            type:Number,
            required:true,
        },
    },
    end_time: {
        hr:{
            type:Number,
            required:true,
        },
        min:{
            type:Number,
            required:true,
        },
    },
    days: {
        type: [{ type: String, enum: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] }],
        default:[]
    },
    mode:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mode",
        required:true
    }
})

module.exports = Routine = mongoose.model("Routine", routine)