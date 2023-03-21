import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import * as dotenv from 'dotenv';
import initRoute from './route/web.js';
import connection from './configs/connectDB.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3500;

configViewEngine(app);

initRoute(app);

app.listen(port, () =>
    console.log('done!'),
);