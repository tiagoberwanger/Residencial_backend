const express = require('express')
const cors = require('cors');
const Controller = require('./src/controllers/controller')
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

// fire test
app.get('/', (_req, res) => res.send('Residencial app is on!'))

app.use('/room', Controller)

app.listen(port, () => console.log(`Running at ${port}`))