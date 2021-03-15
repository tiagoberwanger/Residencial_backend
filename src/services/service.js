const {
  // getAll,
  getById
} = require('../models/model')

// const AllRooms = async () => {
//   const rooms = await getAll();
//   return rooms;
// };

const RoomById = async (id) => {
  const room = await getById(id);
  return room;
};

module.exports = {
  // AllRooms,
  RoomById
};