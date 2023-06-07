/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRound = 10;
// const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('We are Connected');
});
// define Schema
const borrowerSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  sex: String,
  dateOfBirth: String,
  phoneNumber: Number,
  url: String,
});

const ownerSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  location: String,
  sex: String,
  dateOfBirth: String,
  phoneNumber: Number,
  url: String,
  dogName: String,
  dogAge: Number,
  breed: String,
  dogSex: String,
  emotionalSupport: Boolean,
  description: String,
});

// Compile Schema into a Model
const Borrower = mongoose.model('Borrower', borrowerSchema);
const Owner = mongoose.model('Owner', ownerSchema);

const saveBorrower = async (object) => {
  try {
    const hashedPassword = await bcrypt.hash(object.password, saltRound);
    object.password = hashedPassword;
    const doc = new Borrower(object);
    return await doc.save();
  } catch (err) {
    return console.log('SAVE BORROWER ERR', err);
  }
};

const saveOwner = async (object) => {
  try {
    const hashedPassword = await bcrypt.hash(object.password, saltRound);
    object.password = hashedPassword;
    const doc = new Owner(object);
    return await doc.save();
  } catch (err) {
    return console.log('SAVE BORROWER ERR', err);
  }
};

exports.Borrower = Borrower;
exports.Owner = Owner;
exports.saveBorrower = saveBorrower;
exports.saveOwner = saveOwner;
