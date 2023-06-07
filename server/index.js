require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`LISTENING ON PORT http://localhost:${port}`);
});
