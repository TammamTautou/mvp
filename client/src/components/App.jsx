/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import User from './User.jsx';
import Dog from './Dog.jsx';
import DogsList from './DogsList.jsx';

function App() {
  const [borrower, setBorrower] = useState({});
  const [owners, setOwners] = useState({});
  const [owner, setOwner] = useState({});
  const [borrowerInfo, setBorrowerInfo] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    sex: '',
    dateOfBirth: '',
    phoneNumber: '',
    url: '',
  });
  const [ownerInfo, setOwnerInfo] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    sex: '',
    dateOfBirth: '',
    phoneNumber: '',
    ownerUrl: '',
    dogName: '',
    dogAge: '',
    breed: ' ',
    dogSex: '',
    emotionalSupport: false,
    description: '',
    dogUrl: '',
    price: '',
  });
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const loginHandler = (emailAddress) => {
    axios
      .get('/get', { params: { email: emailAddress } })
      .then((result) => {
        if (result.data) {
          setBorrower(result.data.borrower);
          setOwners(result.data.owners);
          return navigate('/home');
        }
        return navigate('/');
      })
      .catch((err) => console.log('APP LOGEIN ERR', err));
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Login loginHandler={loginHandler} navigate={navigate} />}
      />
      <Route
        path="/sign-up"
        element={(
          <Signup
            navigate={navigate}
            ownerInfo={ownerInfo}
            setOwnerInfo={setOwnerInfo}
            borrowerInfo={borrowerInfo}
            setBorrowerInfo={setBorrowerInfo}
            user={user}
            setUser={setUser}
            setOwner={setOwner}
            setOwners={setOwners}
            setBorrower={setBorrower}
          />
        )}
      />
      <Route
        path="/user-info"
        element={(
          <User
            navigate={navigate}
            ownerInfo={ownerInfo}
            setOwnerInfo={setOwnerInfo}
            borrowerInfo={borrowerInfo}
            setBorrowerInfo={setBorrowerInfo}
            user={user}
          />
)}
      />
      <Route path="/dog-info" element={<Dog />} />
      <Route path="/home" element={<DogsList owners={owners} />} />
    </Routes>
  );
}

export default App;
