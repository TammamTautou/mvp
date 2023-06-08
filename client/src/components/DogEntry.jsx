/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

function DogEntry({ owner }) {
  return (
    <div className="">
      <div className="w-full px-12 py-12">
        <img
          className=" rounded-3xl"
          src={owner.dogUrl}
          alt="logo"
        />
      </div>

      <div className="pl-12">
        <h1 className="block text-3xl font-bold">{owner.dogName}</h1>
        <p className="block text-gray-500">{owner.dogAge}</p>
        <p className="block">{owner.price}</p>
        <p className="block overflow-wrap-break-word pb-2">{owner.description}</p>
      </div>

      <div className="px-8 h-20 pb-28">
        <button className="T h-16 rounded-full border-solid border-2 border-gray-300 bg-gray-500 text-white float-right w-24" type="button">Borrow</button>
      </div>
    </div>
  );
}

export default DogEntry;
