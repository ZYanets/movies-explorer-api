const movieRouter = require('express').Router();
const { validateCreateMovie, validateMovie } = require('../middlewares/validation');

const {
  getSavedMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getSavedMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateMovie, deleteMovie);

module.exports = movieRouter;
