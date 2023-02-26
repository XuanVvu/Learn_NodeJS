import connection from '../configs/connectDB';
const util = require('util');
const query = util.promisify(connection.query).bind(connection);

const getAllPosts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await query('SELECT * FROM `posts`');
            resolve(res);
        } catch (e) {
            reject(e);
        }
    });
};

const createPostData = (data) => {
    return new Promise(async (resolve, reject) => {
        const { id, title, category, description, authorName, authorAvt, createAt, cover } = data;

        try {
            await query(
                'INSERT INTO `posts`(id,title ,category, description,authorName ,authorAvt ,createAt ,cover) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
                [id, title, category, description, authorName, authorAvt, createAt, cover],
            );
            resolve({
                message: 'create new post success',
                code: 200,
                data: data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const updatePostData = (data, id) => {
    return new Promise(async (resolve, reject) => {
        const { title, category, description, authorName, authorAvt, createAt, cover } = data;
        try {
            await query(
                'UPDATE `posts` SET title = ?, category = ?, description = ?, authorName = ?, authorAvt = ?, createAt = ?, cover = ?  WHERE  id = ?',
                [title, category, description, authorName, authorAvt, createAt, cover, id],
            );
            resolve({
                message: 'update post success',
                code: 200,
                data: data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deletePostData = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await query(' DELETE FROM `posts` WHERE id = ?', [id]);
            resolve({
                message: 'delete post success',
                code: 200,
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getAllPosts,
    createPostData,
    updatePostData,
    deletePostData,
};
