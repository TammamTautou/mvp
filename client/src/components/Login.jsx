/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

function Login({ loginHandler, navigate }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  return (
    <div className="flex justify-center my-11">
      <form className="h-110 w-96 border-solid border-2 border-gray-300 shadow-lg bg-white">
        <div className="flex justify-center h-28 mb-10 mt-8">
          <img
            className=""
            src="/asstes/logo.jpeg"
            alt="logo"
          />
        </div>
        <label className="px-8 py-3 block" htmlFor="email">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
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
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
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

        <div className="flex justify-evenly py-10">
          <input type="checkbox" id="remember-me" name="remember_me" /* checked */ />
          <label className="relative left-[-1rem]" htmlFor="remember_me">Remember Me</label>
          <a href="#">forgot your password?</a>
        </div>

        <div className="flex justify-center pb-8">
          <span>I don&rsquo;t have an account:</span>
          <a className="font-bold" href="#" onClick={() => navigate('/sign-up')}>Sign-up</a>
        </div>

        <div className="px-8 h-20 pb-28">
          <button
            className="T h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-600 text-white w-full"
            type="button"
            onClick={() => {
              loginHandler(emailInput);
              setEmailInput('');
              setPasswordInput('');
            }}
          >
            LOG IN

          </button>

        </div>
      </form>
    </div>
  );
}

export default Login;
