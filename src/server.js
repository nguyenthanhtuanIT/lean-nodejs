import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 3500;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () =>
    console.log('done!'),
);