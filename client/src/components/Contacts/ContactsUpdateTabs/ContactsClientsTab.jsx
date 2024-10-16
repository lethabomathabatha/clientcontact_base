import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ContactsClientsTab() {
  const [linkedClients, setLinkedClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch linked clients for contact
    axios.get(`http://localhost:5000/api/client-contacts`) 
      .then((response) => {
        setLinkedClients(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching linked clients:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className='text-dark'>Loading...</div>
  }
    
  return (
    <div>
      {linkedClients.length === 0 ? (
        <div>
          <p>No clients found</p>
          <button><Link to="/link">Link a Client</Link> </button>

        </div>
      ) : (
        linkedClients.map((client, index) => (
          <div key={index}>
            <div>Client Name: {client.client_name}</div>
            <div>Client Code: {client.client_code}</div>
            <button>Unlink Client</button>
          </div>
        ))
      )}
    </div>
  );
}