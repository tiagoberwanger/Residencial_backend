const express = require('express')
const cors = require('cors');
const Controller = require('./src/controllers/controller')
const app = express()
const port = process.env.PORT || 3001

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;

const { getById } = require('./src/models/model')

app.use(cors())

// app.use('/', Controller)

// app.use('/room', Controller)

app.get('/room/:id', async (req, res) => {
  const room = await getById(req.params.id);
  if(!room) {
    res.status(STATUS_NOT_FOUND).json({message: 'Room not found'})
  }

  return res.status(STATUS_OK).json(room);
});

app.listen(port, () => console.log(`Running at ${port}`))