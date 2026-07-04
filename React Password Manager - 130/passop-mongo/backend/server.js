const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')

dotenv.config();

const url = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'passop';
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.json())

async function startServer() {
    try {
        await client.connect();
        const db = client.db(dbName);
        //Get all the Passwords
        app.get('/', async (req, res) => {
            const collection = db.collection('passwords');
            const findResult = await collection.find({}).toArray();
            res.json(findResult);
        });
        // Save a Password
        app.post('/', async (req, res) => {
            const password = req.body
            const collection = db.collection('passwords');
            const findResult = await collection.insertOne(password);
            res.send({success: true, result: findResult})
        });

        //Delete a Password by ID
        app.delete('/', async (req, res) => {
            const password = req.body
            const collection = db.collection('passwords');
            const findResult = await collection.deleteOne(password);
            res.send({success: true, result: findResult})
        });

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();