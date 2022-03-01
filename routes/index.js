const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  validateLogin,
  validateCreateUser,
} = require('../middlewares/validation');
const { login, createUser, signout } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-error');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.post('/signout', signout);

router.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
