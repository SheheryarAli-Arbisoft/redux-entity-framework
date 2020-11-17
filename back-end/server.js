require('dotenv').config();
const express = require('express');
const { connecDb } = require('./config/db');

connecDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// const Comment = require('./models/Comment');
const Post = require('./models/Post');

// Post.find().then(posts => {
//   const promises = [];

//   posts.forEach(post => {
//     post.commentsArray.forEach(comment => {
//       promises.push(
//         new Promise(resolve => {
//           const commentObj = new Comment({
//             user: comment.user,
//             content: comment.content,
//           });
//           commentObj.save().then(() => resolve(comment));
//         })
//       );
//     });
//   });

//   Promise.all(promises).then(() => console.log('Comments created'));
// });

// const promises = [];

// Post.find().then(posts => {
//   posts.forEach(post => {
//     promises.push(
//       new Promise(resolve => {
//         post.commentsArray = [];
//         post.save().then(() => resolve());
//       })
//     );
//   });
// });

// Promise.all(promises).then(() => console.log('Post comments array reset'));

// const commentPromises = [];

// Post.find().then(posts => {
//   for (let i = 0; i < posts.length; i++) {
//     const post = posts[i];

//     post.commentsArray.forEach(comment => {
//       commentPromises.push(
//         new Promise(resolve => {
//           new Comment({
//             user: comment.user.toString(),
//             content: comment.content,
//           })
//             .save()
//             .then(result => {
//               post.comments.push({ comment: result.id });
//               resolve();
//             });
//         })
//       );
//     });
//   }

//   Promise.all(commentPromises).then(() => {
//     console.log('Comments created and referenced');

//     const postPromises = posts.map(
//       post =>
//         new Promise(resolve => {
//           post.save().then(() => resolve());
//         })
//     );

//     Promise.all(postPromises).then(() => console.log('Posts updated'));
//   });
// });
