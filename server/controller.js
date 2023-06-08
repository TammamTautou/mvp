const model = require('./model');

exports.addUser = (req, res) => {
  model.addOne(req.body, req.params)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('COTROLLER ADD USER ERR ===> ', err);
      res.status(400).send({ error: err.message });
    });
};

exports.getDoggies = (req, res) => {
  model
    .getAll(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log('COTROLLER GET DOGGIES ERR ===> ', err));
};

exports.updateUser = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  model.changeOne(req.params.user, req.body.email, req.body)
    .then((result) => (result.modifiedCount === 0 ? res.sendStatus(204) : res.sendStatus(200)))
    .catch((err) => console.log('COTROLLER ERR ===> ', err));
};

// exports.removeUser = (req, res) => {
//   model.removeOne(req.params)
//     .then((result) => (result.deletedCount === 0 ? res.sendStatus(204) : res.sendStatus(202)))
//     .catch((err) => console.log('COTROLLER ERR ===> ', err));
// };

// exports.friendStatus = (req, res) => {
//   model.changeMany(req.body)
//     .then((result) => (result.modifiedCount === 0 ? res.sendStatus(204) : res.sendStatus(200)))
//     .catch((err) => console.log('COTROLLER ERR ===> ', err));
// };
//
