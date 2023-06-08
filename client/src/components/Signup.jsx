/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Signup({
  navigate,
  ownerInfo,
  setOwnerInfo,
  borrowerInfo,
  setBorrowerInfo,
  user,
  setUser,
  setBorrower,
  setOwner,
  setOwners,
}) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [checked, setChecked] = useState(false);
  // this handler is not readable so fix it ************************************************
  const submitHandler = () => {
    if (checked) {
      setUser('borrower');
      setBorrowerInfo({
        ...borrowerInfo,
        email: emailInput,
        password: passwordInput,
      });
    } else {
      setUser('owner');
      setOwnerInfo({
        ...ownerInfo,
        email: emailInput,
        password: passwordInput,
      });
    }
    axios
      .get('/get', { params: { email: emailInput } })
      .then((result) => {
        if (result.data) {
          return navigate('/sign-up');
        }
        axios.post(`/post/${user}`, { email: emailInput, password: passwordInput })
          .then(() => {
            setEmailInput('');
            setPasswordInput('');
          })
          .catch((err) => console.log('APP LOGEIN ERR1', err));
        return navigate('/user-info');
      })
      .catch((err) => console.log('APP LOGEIN ERR2', err));
  };
  //* ***********************************************************************************/
  return (
    <div className="flex justify-center my-11">
      <form className="h-110 w-96 border-solid border-2 border-gray-300 shadow-lg bg-white">
        <div className="flex justify-center h-28 mb-10 mt-8">
          <img className="" src="/asstes/logo.jpeg" alt="logo" />
        </div>
        <label className="px-8 py-3 block" htmlFor="email">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="password">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
        </label>
        <div className="pt-4 pb-8 pl-14">
          <div className="py-2">
            <input
              type="checkbox"
              id="remember-me"
              name="remember_me"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label className="" htmlFor="remember_me">
              I&rsquo;m a borrower
            </label>
          </div>

          <div className="py-2">
            <input
              type="checkbox"
              id="remember-me"
              name="remember_me"
              checked={!checked}
              onChange={() => setChecked(!checked)}
            />
            <label className="" htmlFor="remember_me">
              I&rsquo;m a dog owner
            </label>
          </div>
        </div>

        <div className="flex justify-center pb-8">
          <span>I already have an account:</span>
          <button
            type="button"
            className="font-bold"
            href="#"
            onClick={() => navigate('/')}
          >
            Log-in
          </button>
        </div>
        <div className="px-8 h-20 pb-60">
          <button
            className="T h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-500 text-white w-full"
            type="button"
            onClick={() => submitHandler()}
          >
            SIGN UP
          </button>

          <div className="T flex justify-evenly pt-16 text-2xl text-gray-500">
            <i className="fa-brands fa-google" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
