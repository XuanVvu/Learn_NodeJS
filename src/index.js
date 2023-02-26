import express from 'express';

import morgan from 'morgan';
import configViewEngine from './configs/viewEngine';

import initAPIRoute from './routes/api';
import cors from 'cors';

const bodyParser = require('body-parser');
const multer = require('multer');

// import connection from './configs/connectDB';
// const morgan = require('morgan')

const port = 8080;
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
app.use(morgan('combined'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({ dest: 'uploads' });

// use it before all route definitions

// initWebRoute(app);
// enable CORS
app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'] }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// const jsonParser = bodyParser.json({ limit: '50mb' });
// const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });

// app.use(jsonParser);
// app.use(urlencodedParser);

initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
