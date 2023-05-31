import express, { Application, Request, Response, urlencoded } from 'express';
import cors from 'cors'
const app:Application = express()
const port = 5000

//cors use
app.use(cors());
//parser
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response) => {
  res.send('Working succcessfully')
})

export default app;