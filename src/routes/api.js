import express from 'express';
import { PostsList, createNewPost, updatePost, deleteUse } from '../controller/APIController';
import { upload } from '..';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/posts', PostsList);
    router.post('/create-post', createNewPost);
    router.put('/update-post/:id', updatePost);
    router.delete('/delete-post/:id', deleteUse);

    return app.use('/api/v1/', router);
};

export default initAPIRoute;
