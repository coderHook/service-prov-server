import express, {Application} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import clientsRoutes from './routes/clients.routes'

const app: Application = express();

//Set up cors
var corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use('/', clientsRoutes)

const port: number = 5000;

app.listen(port, () => 
  console.log(`App Running on http://localhost:${port}`)
);