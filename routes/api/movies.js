const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings, updateMovie, deletemovie } = require('../../models/movie');

// handle all the routes

router.put('/:id/:title', getMovie, updateMovie)

router.delete('/:id/delete', deletemovie)

router.get('/:id', getMovie, (req, res) => {
  res.json(res.rows);
})

// get all movies

router.get('/', getAllMovies, (req, res) => {
  res.json(res.rafa);
})

// Get movies withrating BONUS

// Get single movie

module.exports = router;

