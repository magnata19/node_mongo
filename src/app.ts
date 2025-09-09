import express from 'express'
import cors from 'cors'
import { RootRouter } from '.'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from '../swagger.json';

const app = express()

app.use(express.json())
app.use(cors())
app.use(RootRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

export default app;