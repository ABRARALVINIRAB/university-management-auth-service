import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import usersRouter from './app/modules/users/users.route'
const app: Application = express()

//cors use
app.use(cors())

app.use(express.json())
//parser
app.use(express.urlencoded({ extended: true }))

///application routes
app.use('/api/v1/users/', usersRouter)
//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working succcessfully')
})

export default app
