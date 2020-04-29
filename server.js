//create express app
const express = require('express');
const app = express();

//Set your port numnber
const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log('Server is running on ${HTTP_PORT}');
});

//Root endpoint
app.get('/', (req, res, next) => {
  res.json({ message: 'OK' });
});

//You can insert other endpoits here

//this is a default resoonse for any other= request
app.use(function (req, res) {
  res.status(404);
});
