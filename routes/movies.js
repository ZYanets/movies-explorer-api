const movieRouter = require('express').Router();
const { validateCreateMovie, validateMovie } = require('../middlewares/validation');

const {
  getSavedMovies,
  createMovie,
  deleteMovie,
  // likeMovied,
  // dislikeMovie,
} = require('../controllers/movies');

movieRouter.get('/', getSavedMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateMovie, deleteMovie);
// router.put('/:movieId/likes', validateMovie, likeMovie);
// router.delete('/:movieId/likes', validateMovie, dislikeMovie);

module.exports = movieRouter;
