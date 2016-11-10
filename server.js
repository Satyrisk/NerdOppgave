const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tvShowruter = require('./tvShow/tvShowRouter');


const app = express();
const APP_PORT = 3000;


app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => { res.send('Hello World')});

app.use('/tvshow', tvShowRouter);
app.listen(APP_PORT, () => {
  console.log('App running on port ${APP_PORT}');
});