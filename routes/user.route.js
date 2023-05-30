const { addUser } = require('../controllers/user.controller');
const { getUser } = require('../controllers/user.controller');
const { updateUser } = require('../controllers/user.controller');
const { deleteUser } = require('../controllers/user.controller');


const router = require('express').Router()

router.post('/add',addUser);
router.get('/get', getUser);
router.put('/update/', updateUser);
router.delete('/delete/', deleteUser);

module.exports = router