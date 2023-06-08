/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

function User({
  navigate, user, setBorrowerInfo, borrowerInfo, setOwnerInfo, ownerInfo,
}) {
  const submitHandler = (e) => {
    if (user === 'borrower') {
      setBorrowerInfo({
        ...borrowerInfo,
        [e.target.name]: e.target.value,
      });
    } else {
      setOwnerInfo({
        ...ownerInfo,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="flex justify-center my-11">
      <form className="h-110 w-96 border-solid border-2 border-gray-300 shadow-lg bg-white">
        <div className="flex justify-center h-28 mb-10 mt-8">
          <img
            className=""
            src="/asstes/addImage.png"
            alt="logo"
          />
        </div>
        <label className="px-8 py-3 block" htmlFor="firstname">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">First Name</span>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your first name..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="lastname">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Last Name</span>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your last name..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="address1">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Address 1</span>
          <input
            type="text"
            name="address1"
            placeholder="Enter your address..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="address2">
          <span className=" block text-sm font-medium text-slate-700">Address 2</span>
          <input
            type="text"
            name="address2"
            placeholder="Enter your address..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="phonenumber">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Phone Number</span>
          <input
            id="phonenumber"
            type="number"
            name="phonenumber"
            placeholder="Enter your phone number..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />

        </label>

        <label className="px-8 py-3 block" htmlFor="dateOfBirth">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Date Of Birth</span>
          <input
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            onChange={(e) => submitHandler(e)}
            required
          />
        </label>
        <div className="flex justify-evenly p-5" onChange={(e) => submitHandler(e)}>
          <label className="" htmlFor="male">
            <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Male</span>
            <input
              id="male"
              type="radio"
              value="male"
              name="sex"
              className=""
              required
            />
          </label>
          <label className="" htmlFor="female">
            <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Female</span>
            <input
              id="female"
              type="radio"
              value="female"
              name="sex"
              className=""
              required
            />
          </label>
          <label className="" htmlFor="other">
            <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Other</span>
            <input
              id="other"
              type="radio"
              value="other"
              name="sex"
              className=""
              required
            />
          </label>
        </div>

        <div className="px-8 h-20 pb-28">
          <button
            className="T h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-500 text-white float-right w-24"
            type="button"
            onChange={(e) => console.log(e)}
          >
            Done

          </button>
        </div>
      </form>
    </div>
  );
}

export default User;
