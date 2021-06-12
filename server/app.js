const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/json', (req, res) => {
  res.json({ name: 'Somthing' })
})

app.listen(process.env.port || 3000)
