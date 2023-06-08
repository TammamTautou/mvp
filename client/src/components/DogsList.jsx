/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import DogEntry from './DogEntry.jsx';

function DogsList({ owners }) {
  return (
    <div className="flex flex-col items-center">
      <nav className="w-full">
        <div className="bg-white h-16 flex justify-end items-center shadow-lg">
          <i className="fa-regular fa-heart px-5 text-3xl" />
          <i className="fa-regular fa-message px-5 text-3xl" />
          <i className="fa-regular fa-user px-5 text-3xl" />
        </div>
      </nav>

      <div className="flex justify-center flex-col mx-32 mt-5 border-solid border-gray-300 shadow-lg bg-white w-6/12">
        {owners.map((owner) => <DogEntry owner={owner} key={owner._id} />)}
      </div>

    </div>
  );
}

export default DogsList;
