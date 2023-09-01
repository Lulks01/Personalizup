import express from "express";
import cors from 'cors';
import clientsRoutes from "./routes/clients.js";
import rifaRoutes from './routes/rifa_routes.js';


const port = 3030
const app = express();

app.use(express.json());
app.use(cors());


app.use('/', clientsRoutes);
app.use('/rifas', rifaRoutes);


app.listen(port);