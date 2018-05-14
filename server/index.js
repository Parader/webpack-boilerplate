const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV);

app.use(bodyParser.json());

setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  console.log(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
