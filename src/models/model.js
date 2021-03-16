const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('rooms').find().toArray())
}

const getById = async (id) => {
  const room = await connection()
    .then((db) => db.collection('rooms').findOne({id: id }));
  return room;

};

module.exports = {
  getAll,
  getById
}