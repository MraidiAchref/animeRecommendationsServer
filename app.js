const express = require('express');

const app = express();

const cors = require('cors');
const config = require('./database') ;
config();

app.use(express.json());

app.use(cors());


app.get('/home', (req, res) => {
    console.log('Hello, World!');
    res.send('Hello, World!'); // You can send a response to the client if needed
  });

module.exports= app;