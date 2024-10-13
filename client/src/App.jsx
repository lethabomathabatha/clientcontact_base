import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace '/api/test' with your actual endpoint
    axios.get('http://localhost:5000/api/')
      .then((response) => {
        setData(response.data); 
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {data ? (
        <div>
          <h2>Data from Server:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
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
