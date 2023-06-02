const {login} = require('../controllers/login');
const {deleteFav} = require('../controllers/deleteFav');
const {postFav} = require('../controllers/postFav');
const {postUser} = require('../controllers/postUser')
const {getCharById} = require('../controllers/getCharById');
const express = require('express');
const router = express.Router();

router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/login', postUser)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

module.exports = router