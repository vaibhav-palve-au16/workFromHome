const express = require('express');
const formidable = require('express-formidable');
// app.use(formidable({
//     encoding: 'utf-8',
//     uploadDir: '/my/dir',
//     multiples: true,
// }));
const {requireSignin, isAdmin} = require('../middlerwares/auth');
const  {create, update, remove, list, read}  = require('../controller/product');
let router = express
    .Router()
    .post('/product',requireSignin, isAdmin, formidable(), create)
    .put('/product/:productId', requireSignin, isAdmin, update)
    .delete('/product/:productId', requireSignin, isAdmin, remove)
    .get('/products', list)
    .get('/product/:prodctId', read);

module.exports = router