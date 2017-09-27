const express = require('express');
const app = express();
const path = require('path');

app.use(require('./logging.middleware'));
app.use(require('./body-parsing.middleware'));
app.use(require('./statics.middleware'));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
})

module.exports = app;

