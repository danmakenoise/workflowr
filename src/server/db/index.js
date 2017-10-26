import { MongoClient } from 'mongodb';

const setupDatabase = () =>
  new Promise((resolve, reject) => {
    const url = 'mongodb://localhost:27017/workflowr-dev';

    MongoClient.connect(url, (err, db) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(db);
    });
  });

export default setupDatabase;
