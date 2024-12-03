require('dotenv').config();
const mongoose = require('mongoose');

function connectToDb() {
    // Check if the DB_CONNECT environment variable exists
    if (!process.env.DB_CONNECT) {
        console.error('MongoDB URI is missing in the environment variables');
        return;
    }

    mongoose.connect(process.env.DB_CONNECT, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
        .then(() => console.log('Connected to DB'))
        .catch(err => console.error('Failed to connect to DB:', err));
}

module.exports = connectToDb;
