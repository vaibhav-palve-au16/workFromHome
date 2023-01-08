const express = require('express');
const { register, login, admin } = require('../controller/auth');
const {requireSignin, isAdmin} = require('../middlerwares/auth');

let router = express
    .Router()
    .post('/register', register)
    .post('/login', login)
    .get('/secret', requireSignin, isAdmin, admin);

module.exports = router