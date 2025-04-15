import mongoose from "mongoose";

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDb");
    }).catch(err => {
        console.log("Error connecting to MongoDb: ", err);
    })
};

export default connectToDB;