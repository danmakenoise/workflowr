import mongoose from 'mongoose';

const setupDatabase = url =>
  new Promise((resolve, reject) => {
    const { Schema, model } = mongoose;
    const { Types } = Schema;
    const { ObjectId } = Types;

    const USER_MODEL_NAME = 'User';
    const LIST_ITEM_MODEL_NAME = 'ListItem';

    mongoose.connect(url, { useMongoClient: true });
    mongoose.Promise = global.Promise;

    const userSchema = new Schema({
      _id: ObjectId,
      username: String,
    });

    const listItemSchema = new Schema({
      _id: ObjectId,
      body: String,
      parent: { type: ObjectId, ref: LIST_ITEM_MODEL_NAME },
      user: { type: ObjectId, ref: USER_MODEL_NAME },
    });

    const User = model(userSchema, USER_MODEL_NAME);
    const ListItem = model(listItemSchema, LIST_ITEM_MODEL_NAME);

    const { connection } = mongoose;

    connection.on('error', reject());
    connection.on('open', resolve({ User, ListItem }));
  });

export default setupDatabase;
