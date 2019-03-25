import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './config'
import getKindness from './getKindness'

function setupMiddleware (app) {
  app.use(bodyParser.json())
  app.use(cors())
}

function setupRoutes (app) {
  app.get('/hello', (req, res) => {
    res.status(200).send({
      success: 'true',
      data: 'Hello kind',
    })
  })

  app.post('/is', async (req, res) => {
    const { message } = req.body

    const kindness = await getKindness(message)

    res.status(200).send({
      success: true,
      data: kindness,
    })
  })

  app.get('*', function (req, res) {
    res.status(404).send('Be kind!')
  })
}

function setupExpress () {
  const app = express()

  setupMiddleware(app)
  setupRoutes(app)

  const PORT = process.env.PORT

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })
}

setupExpress()
