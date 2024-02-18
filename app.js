const express = require('express');

const app = express();

const config = require('./database/database') ;
config();

app.use(express.json());



app.use('/anime', require('./src/anime/anime.routes'));

app.use('/profiles', require('./src/profiles/profiles.routes'));

module.exports= app;