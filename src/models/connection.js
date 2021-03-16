const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_NAME = 'Residencial';
const MONGO_DB_URL = process.env.MONGODB_URI;

const connection = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.log(err.message)
    process.exit();
  });

module.exports = connection; 