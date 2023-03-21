import express from "express";
import dashboard from '../controllers/homeController.js'

let router = express.Router();

const initRoute = (app) => {
    router.get('/', dashboard);

    return app.use('/api/v1', router);
}

export default initRoute;