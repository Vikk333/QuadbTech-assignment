import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

const App = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    
      <div>
        
        <Routes>
  <Route path="/" element={<ShowList shows={shows} />} />
  <Route path="/show/:id" element={<ShowDetails />} />
</Routes>

      </div>
    
  );
};

export default App;
