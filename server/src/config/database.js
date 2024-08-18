const mongoose = require('mongoose');

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB with Mongoose!");
    } catch (e) {
        console.error("Error connecting to MongoDB", e);
        process.exit(1);
    }
}

module.exports = dbConnect;