const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const http = require('http');

mongoose.connect('mongodb://demostarwars:demostarwars@ds137882.mlab.com:37882/demostarwars');

app.use(bodyParser.json({ type: '*/*' }));

router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Listening on port ', port)
})