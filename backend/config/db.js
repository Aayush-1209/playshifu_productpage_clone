require('dotenv').config();
const mongoose = require('mongoose');

const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');
}

module.exports = connection;