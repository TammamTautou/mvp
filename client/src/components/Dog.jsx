/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

function Dog() {
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
        <label className="px-8 py-3 block" htmlFor="name">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your dog's name..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="breed">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Breed</span>
          <input
            id="breed"
            type="text"
            name="breed"
            placeholder="Enter your dog's breed..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="age">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Age</span>
          <input
            type="number"
            name="age"
            placeholder="Enter your dog's age..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="treats">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">treats</span>
          <input
            type="number"
            name="treats"
            placeholder="How much treats in US dollar..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </label>

        <label className="px-8 py-3 block" htmlFor="description">
          <span className="after:content-['*'] after:text-red-500 block text-sm font-medium text-slate-700">Description</span>
          <input
            id="description"
            type="text"
            name="description"
            className="mt-1 block w-full px-3 py-2 h-40 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            required
          />
        </label>
        <div className="flex justify-evenly p-5">
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
        </div>

        <div className="flex justify-center pb-5">
          <input className="relative right-4" type="checkbox" id="emotional-support-me" name="emotional-support" checked />
          <lable className="" htmlFor="emotional-support">Emotional Support</lable>
        </div>

        <div className="px-8 h-20 pb-28">
          <button className="T h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-500 text-white float-right w-24" type="button">Done</button>
        </div>
      </form>
    </div>
  );
}

export default Dog;
