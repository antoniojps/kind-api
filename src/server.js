import express from 'express'

const app = express()

app.post('/hello', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    data: 'Hello kind'
  })
})
const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
