require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

const app = express();
const buildPath = path.join(__dirname, '../client/dist');

app.use(express.static(buildPath));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`LISTENING ON PORT http://localhost:${port}`);
});
