require('dotenv').config();

const app = require('./app');
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/animedb", { useNewUrlParser: true, useUnifiedTopology: true });


const port = process.env.PORT_CLIENT || 3000;
const server = require('http').createServer(app);

server.listen(port, () => {
  console.log(`Client Server started on port ${port}`);
});

module.exports = server;  