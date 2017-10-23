import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.use('/client', express.static('dist/client'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening on localhost:3000'); // eslint-disable-line no-console
});
