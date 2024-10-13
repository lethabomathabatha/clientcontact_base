import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/');
      setData(response.data.fruits);
      console.log(response.data.fruits);
    } catch (error) {
      setError('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {data.length > 0 ? (
        <div>
          <h2>Data from Server:</h2>
          {data.map((fruit, index) => (
            <div key={index}>
              <p>{fruit}</p>
              <br />
            </div>
          ))}
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
