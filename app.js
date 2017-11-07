const express = require('express');
const volleyball = require('volleyball');
const app = express();



app.use(volleyball);

app.get('/', (req, res) => {
  res.send('Welcome to Port 3000')
});

app.get('/news', (req, res) => {
  res.send('The News')
});

app.listen(3000, () => {
  console.log('server listening')
});

console.log('Git Test');
