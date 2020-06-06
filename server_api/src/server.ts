import express, { request } from 'express';
import routes from './routes'
import path from 'path';
import cors from 'cors'

const app = express();

app.use(cors()); // cors({ origin: "www..."}) 

app.use(express.json()); // Adicionado para que o expresse entenda as requisições no formato JSON
app.use(routes);
 
app.use('/assets', express.static(path.resolve(__dirname, '..','assets')));

app.listen(3333);