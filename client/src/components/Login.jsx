/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

function Login() {
  return (
    <div className="flex justify-center my-11 ">
      <from className="h-110 w-96 border-solid border-2 border-gray-300 shadow-lg">
        <div className="flex justify-center h-28 mb-10 mt-8">
          <img
            className=""
            src="/asstes/logo.jpeg"
            alt="logo"
          />
        </div>
        <lable className="px-8 py-3 block" htmlFor="email">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </lable>

        <lable className="px-8 py-3 block" htmlFor="password">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </lable>

        <div className="flex justify-evenly py-10">
          <input type="checkbox" id="remember-me" name="remember_me" checked />
          <lable className="relative left-[-1rem]" htmlFor="remember_me">Remember Me</lable>
          <a href="#">forgot your password?</a>
        </div>

        <div className="flex justify-center pb-8">
          <span>I don&rsquo;t have an account:</span>
          <a href="#">Sign-up</a>
        </div>
        <div className="px-8 h-20">
          <button className="h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-700 text-white w-full" type="button">LOGIN</button>

        </div>
      </from>
    </div>
  );
}

export default Login;
