const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI

const client = new MongoClient(uri);

async function dbConnect() {
    try {
        await client.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = dbConnect;