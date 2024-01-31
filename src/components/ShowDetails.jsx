import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
  <div className="flex items-center justify-center flex-col w-full max-w-md p-8 bg-gray-200 rounded-lg shadow-lg">
    <h1 className="text-3xl font-extrabold mb-4 text-gray-800">{showData.name}</h1>
    <div className="relative mb-6">
      <img
        src={showData.image.original}
        alt={showData.name}
        className="w-full max-h-96 rounded-lg shadow-md object-cover transition-transform transform hover:scale-105"
      />
    </div>
    <p className="text-gray-700 leading-relaxed">{showData.summary}</p>
  </div>
</div>

  

  );
};

export default ShowDetails;
