const express = require('express');
const fs = require('fs')
const csvParser = require('csv-parser')
const app = express();
const multer = require('multer');
const Profiles = require('./src/profiles/profiles.model')

const config = require('./database/database') ;
config();

app.use(express.json());
const upload = multer({ dest: 'uploads/' });

app.post('/upload-csv', upload.single('file'), (req, res) => {
    const results = [];
  
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        Profiles.insertMany(results)
          .then(() => res.status(200).send('Data successfully uploaded to MongoDB'))
          .catch((error) => res.status(500).send(error));
  
        fs.unlinkSync(req.file.path); // Remove the temp file
      });
  });
  



app.use('/anime', require('./src/anime/anime.routes'));


module.exports= app;