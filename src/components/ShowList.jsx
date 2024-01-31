import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <h1 className="  text-center text-3xl font-bold mb-8 col-span-full">TV Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id} className=" bg-gray-200 p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">{show.show.name}</h2>
          <p className="text-gray-600">Type: {show.show.type}</p>
          <p className="text-gray-600">Genres: {show.show.genres.join(', ')}</p>
          <p className="text-gray-600">Status: {show.show.status}</p>
          <Link to={`/show/${show.show.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;

