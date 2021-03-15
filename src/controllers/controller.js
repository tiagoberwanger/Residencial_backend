// const { Router } = require('express');
// const {
//   AllRooms,
//   RoomById
// } = require('../services/service')

// const { getById } = require('../models/model')

// const Controller = new Router();

// const STATUS_OK = 200;
// const STATUS_NOT_FOUND = 404;

// Controller.get('/', async (_req, res) => {
//   const getAllRooms = await AllRooms();
//   return res.status(STATUS_OK).json(getAllRooms)
// });

// Controller.get('/:id', async (req, res) => {
//   const room = await getById(req.params.id);
//   if(!room) {
//     res.status(STATUS_NOT_FOUND).json({message: 'Room not found'})
//   }

//   return res.status(STATUS_OK).json(room);
// });

// module.exports = Controller;