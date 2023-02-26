import { getAllPosts, createPostData, updatePostData, deletePostData } from '../models/APImodel';

const PostsList = async (req, res) => {
    let data = await getAllPosts();
    return res.send(data);
};

let createNewPost = async (req, res) => {
    let data = await createPostData(req.body);

    return res.status(200).json(data);
};

let updatePost = async (req, res) => {
    let id = req.params.id;

    let data = await updatePostData(req.body, id);
    return res.status(200).json(data);
};

let deleteUse = async (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'DELETE');
    let id = req.params.id;

    let data = await deletePostData(id);
    return res.status(200).json(data);
};

module.exports = {
    PostsList,
    createNewPost,
    updatePost,
    deleteUse,
};
