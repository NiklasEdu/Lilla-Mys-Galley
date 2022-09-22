


const path = require('path');
const fs = require('fs');

const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

//Midleware in express.js to read json body
app.use(express.json());


//location of the json files
const appDir = './json';

//sending a simple json string in response to 

//recieving a simple object and store as json file
app.post('/resultat', (req, res) => {

  const b = req.body;
  writeJSON('resultat.json', b);

  //respons with the json file
  res.json(b);
});

//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


function writeJSON(fname, obj) {
  const appDataDir = path.normalize(path.join(__dirname, appDir));

  if (!fs.existsSync(appDataDir))
    fs.mkdirSync(appDataDir);

  fs.writeFileSync(path.join(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.normalize(path.join(__dirname, appDir));
  obj = JSON.parse(fs.readFileSync(path.join(appDataDir, fname), 'utf8'));
  return obj;
}