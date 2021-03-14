const express = require('express')
const cors = require('cors');
const Controller = require('./src/controllers/controller');
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors())

app.use('/room', Controller)

app.listen(port, () => console.log(`Running at ${port}`))