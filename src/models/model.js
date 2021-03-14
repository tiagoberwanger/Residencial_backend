const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Busca todos os resultados do banco.
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