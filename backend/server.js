const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const connection = require('./config/db');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5080;
connection();
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{
res.send('healthy');
})
app.use('/products', productRoutes);

app.listen(PORT, ()=>{
console.log(`listening on ${PORT}`)
})

