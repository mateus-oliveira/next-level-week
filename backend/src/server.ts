import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors(
    // origin: <DNS do frontend>
))
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(
    path.resolve(__dirname, '..', 'uploads')
));

app.listen(3333);