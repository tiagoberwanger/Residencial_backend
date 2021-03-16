const { MongoClient } = require('mongodb');

const DB_NAME = 'Residencial';
// const MONGO_DB_URL = "mongodb+srv://tiagoberwanger:mualbk@cluster0.ci38t.mongodb.net/Residencial?retryWrites=true&w=majority"
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