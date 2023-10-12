const express = require('express');
const router = express.Router();
const {getAllShows, createMovie, getMovieById, _delete,  setMovie, getImage} = require('../shows/showController');

router.get('/Movies', getAllShows);
router.get('/Movie/:id', getMovieById);
router.post('/addMovie', createMovie);
router.post('/upload', getImage);
router.put('/update/:id', setMovie);
router.delete('/delete/:id', _delete);

module.exports = router;