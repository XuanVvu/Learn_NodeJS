import express from 'express';

import morgan from 'morgan';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web';
// import connection from './configs/connectDB';
// const morgan = require('morgan')

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
app.use(morgan('combined'));

initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
