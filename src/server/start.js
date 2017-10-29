import express from 'express';

import setupDatabase from './db';

require('babel-polyfill');

const DB_URL = 'mongodb://localhost:27017/workflowr-dev';

const start = async () => {
  let models;

  try {
    models = await setupDatabase(DB_URL);
  } catch (err) {
    throw err;
  }

  if (models) {
    console.log('connected to database'); // eslint-disable-line no-console
  }

  const app = express();

  app.set('view engine', 'pug');

  app.use('/client', express.static('dist/client'));

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.listen(3000, () => {
    console.log('listening on localhost:3000'); // eslint-disable-line no-console
  });
};

start();
