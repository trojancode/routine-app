const mongoose = require('mongoose');




const connectDB = async () => {

    try {


        if(!process.env.MONGODB_URI) throw {
            message:"Define MONGODB_URI in .env"
        }
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
        });


        console.log('Mongoose DB connected');


    } catch (error) {

        console.log(error.message);

    }
}

module.exports = connectDB;