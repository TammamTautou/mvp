/* eslint-disable consistent-return */
const db = require('./db');

exports.addOne = (object, { user }) => {
  if (user === 'borrower') {
    return db.Borrower.findOne({ email: object.email }).exec()
      .then((result) => {
        if (result) {
          console.log(result);
          return Promise.reject(new Error('USER ALREADY IN USE'));
        }
        return db.saveBorrower(object);
      });
  }
  if (user === 'owner') {
    return db.Owner.findOne({ email: object.email }).exec()
      .then((result) => {
        if (result) {
          console.log(result);
          return Promise.reject(new Error('USER ALREADY IN USE'));
        }
        return db.saveOwner(object);
      });
  }
  return Promise.reject(new Error('INVALID USER TYPE: MUST BE EITHER "BORROWER" OR "OWNER"'));
};

exports.getAll = async ({ email }) => {
  try {
    const ownersResult = await db.Owner.find({}).sort({ createAt: -1 }).exec();
    const borrowerResult = await db.Borrower.findOne({ email }).exec();
    if (borrowerResult) {
      return {
        borrower: borrowerResult,
        owners: ownersResult,
        owner: '',
      };
    }
    const ownerResult = await db.Owner.findOne({ email }).exec();
    if (ownerResult) {
      return {
        borrower: '',
        owner: ownerResult,
        owners: ownersResult,
      };
    }
  } catch (err) {
    console.log('MODEL GET ALL ERR', err);
    throw err;
  }
};

exports.changeOne = (user, query, update) => {
  if (user === 'borrower') {
    return db.Borrower.updateOne({ email: query }, update);
  } if (user === 'owner') {
    return db.Owner.updateOne({ email: query }, update);
  }
  return Promise.reject(new Error('INVALID USER TYPE: MUST BE EITHER "BORROWER" OR "OWNER"'));
};

// exports.removeOne = (object) => {
//   return db.Model.remove(object);
// };

// exports.changeMany = (obj1) => {
//   return db.Model.updateMany(obj1, { $not: { friend: true } });
// };
