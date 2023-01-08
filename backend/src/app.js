const express = require('express');
const cors = require('cors');
const route = require('./routes/registrationRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/infos', route);

app.get('/', (_req, res) => {
  res.send();
});

module.exports = app;
