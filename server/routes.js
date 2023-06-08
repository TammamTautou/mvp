const router = require('express').Router();
const controller = require('./controller');

router.get('/get', controller.getDoggies);
router.post('/post/:user', controller.addUser);
router.put('/put/:user', controller.updateUser);
// router.put('/put/friend-status', controller.);
// router.delete('/delete/:id', controller.);

module.exports = router;
