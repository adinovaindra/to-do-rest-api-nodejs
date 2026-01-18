const express = require('express')
const app = express()
const PORT = 3000

app.get('/health', (req, res) => {
  res.status(200)
  res.send('OK!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
