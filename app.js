// imports
const express = require('express');
const { connectMongoDB } = require('./connection');


// initializations
const app = express();


// connection to Local Mongo DB
connectMongoDB('mongodb://localhost:27017')
    .then(() => console.log("Connected to DB Successfully"))
    .catch((error) => console.log("Connection unsuccessful due to => ", error));


// Running server on port 3000
app.listen(3000, () => console.log("Server running on port 3000"))