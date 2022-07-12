import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import userRouter from './routes/userRoutes'
import corsOptions from './config/corsOptions'
import credentials from './middleware/credentials'

const app = express()
const HTTP_PORT = 8000

app.use(cors(corsOptions))
app.use(helmet())
app.use(compression())
app.use(credentials)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => res.status(404).send('Something went wrong.'))
app.use((req, res, next) => res.status(500).send('Sorry we could not find that.'))

app.use('/userapi', userRouter)

app.listen(HTTP_PORT, () => console.log(`Server running on port ${HTTP_PORT}`))