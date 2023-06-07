const db = require('./db');

exports.addOne = (object, { user }) => db.Borrower.findOne({ email: object.email }).exec()
  .then((result) => {
    if (result) {
      throw new Error('USER ALREADY IN USE');
    }
    if (user === 'borrower') {
      return db.saveBorrower(object);
    } if (user === 'owner') {
      return db.saveOwner(object);
    }
    throw new Error('Invalid user type: must be either "borrower" or "owner"');
  });

exports.getAll = ({ email }) => db.Borrower.findOne({ email }).exec()
  .then((borrowerResult) => {
    if (borrowerResult) {
      return db.Owner.find({}).sort({ createdAt: -1 }).exec()
        .then((ownersResult) => ({
          borrower: borrowerResult,
          owners: ownersResult,
        }));
    }
    return borrowerResult;
  })
  .catch((err) => console.log('MODEL GET ALL ERR', err));
// exports.removeOne = (object) => {
//   return db.Model.remove(object);
// },
// exports.changeOne = (obj1,obj2) => {
//   return db.Model.updateOne(obj1, {$set: obj2});
// },
// exports.changeMany = (obj1) => {
//   return db.Model.updateMany(obj1, { $not: { friend: true } });
// };
