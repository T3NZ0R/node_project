import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { apiRouter } from './routes/api.routes';
import {config} from "./config/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

const { PORT } = config;


app.listen(PORT, async () => {
    console.log(`Server has started on Port: ${PORT}`);

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
});
