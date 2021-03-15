const express = require('express')
const cors = require('cors');
const Controller = require('./src/controllers/controller');
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use('/room', Controller)

app.listen(port, () => console.log(`Running at ${port}`))