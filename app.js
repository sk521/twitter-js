const express = require('express');
const volleyball = require('volleyball');

const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');
app.use('/', routes);
app.use(volleyball);
app.use(express.static('public'));




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening to Port: ${PORT}`);
});

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
