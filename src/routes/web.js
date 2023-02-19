import express from 'express';
import {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getUpdateUser,
    postUpdateUser,
} from '../controller/homeController';

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomepage);
    router.get('/detail/user/:id', getDetailPage);
    router.get('/get-update/user/:id', getUpdateUser);
    router.post('/create-new-user', createNewUser);
    router.post('/delete/user/:id', deleteUser);
    router.post('/post-update/user/:id', postUpdateUser);
    router.get('/about', (req, res) => {
        return res.send('ABOUT PAGE');
    });

    return app.use('/', router);
};

export default initWebRoute;
