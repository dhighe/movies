const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;

function getAllMovies(req, res, next) {
// implement get all movies
  db.any(`SELECT * FROM movies LIMIT ${limit} OFFSET ${offset};`)
  .then((tacos) => {
    res.rafa = tacos;
    next();
  })
  .catch((err) => {
    return next(err)
  })
};

function getMovie(req, res, next) {
// implement get single movie
let mID = parseInt(req.params.id);
  db.query('SELECT * FROM movies WHERE id=$1', mID)
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch((err) => {
      return next(err)
    })
};

function updateMovie(req, res, next) {
// implement update
let title = req.params.title;
let mID = parseInt(req.params.id);
  db.none('UPDATE movies SET title=$2 WHERE id=$1', [mID, title])
   .then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated movie'
      });
  })
    .catch((err) => {
      return next(err)
    })
}

function deletemovie(req, res, next) {
// implement delete
let mID = parseInt(req.params.id);
  db.result('DELETE FROM movies WHERE id=$1', [mID])
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: 'Bye Bye Movie'
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });

}

// BONUS
function getAllMoviesWithRatings(req, res, next) {

}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deletemovie,
  getAllMoviesWithRatings
};
