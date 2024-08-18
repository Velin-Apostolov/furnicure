const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://velinapostolove:Kpa4F9NvpSrpIPlU@furnicure.kd77p.mongodb.net/?retryWrites=true&w=majority&appName=FurniCure";

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