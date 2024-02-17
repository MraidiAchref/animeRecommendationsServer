const express = require('express');

const app = express();

const config = require('./database/database') ;
config();

app.use(express.json());



app.use('/anime', require('./src/anime/anime.routes'));

module.exports= app;