const express = require('express');
const {requireSignin, isAdmin} = require('../middlerwares/auth');
const  {create, update, remove, list, read}  = require('../controller/category');
let router = express
    .Router()
    .post('/category',requireSignin, isAdmin, create)
    .put('/category/:categoryId', requireSignin, isAdmin, update)
    .delete('/category/:categoryId', requireSignin, isAdmin, remove)
    .get('/categories', list)
    .get('/category/:categoryId', read);

module.exports = router