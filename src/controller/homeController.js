// import connection from '../configs/connectDB';

// let getHomepage = async (req, res) => {
//     const [results, fields] = await connection.execute('SELECT * FROM `user`');
//     // return res.send(results);
//     return res.render('home.ejs', { data: results });
// };

// let getDetailPage = async (req, res) => {
//     let id = req.params.id;
//     let user = await connection.execute('SELECT * FROM `user` WHERE id = ?', [id]);
//     return res.send(JSON.stringify(user[0]));
// };

// let createNewUser = async (req, res) => {
//     let { firstName, lastName, email, address } = req.body;
//     await connection.execute('INSERT INTO `user`(firstName, lastName, email, address) VALUES(?, ?, ?, ?)', [
//         firstName,
//         lastName,
//         email,
//         address,
//     ]);
//     return res.redirect('/');
// };

// let deleteUser = async (req, res) => {
//     let id = req.params.id;
//     await connection.execute(' DELETE FROM `user` WHERE id = ?', [id]);
//     return res.redirect('/');
// };

// let getUpdateUser = async (req, res) => {
//     let id = req.params.id;
//     let user = await connection.execute('SELECT * FROM `user` WHERE id = ?', [id]);
//     return res.render('update.ejs', { data: user[0] });
// };

// let postUpdateUser = async (req, res) => {
//     let id = req.params.id;
//     let { firstName, lastName, email, address } = req.body;
//     await connection.execute('UPDATE `user` SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?', [
//         firstName,
//         lastName,
//         email,
//         address,
//         id,
//     ]);
//     return res.redirect('/');
// };

// module.exports = {
//     getHomepage,
//     getDetailPage,
//     createNewUser,
//     deleteUser,
//     getUpdateUser,
//     postUpdateUser,
// };
