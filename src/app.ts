import express from 'express'
import cors from 'cors'
import { RootRouter } from '.'

const app = express()

app.use(express.json())
app.use(cors())
app.use(RootRouter)

app.get('/', (req, res) => {
  res.send('Ecommerce API!')
})

export default app;