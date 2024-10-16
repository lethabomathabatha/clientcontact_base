import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ContactsClientsTab() {
  const [linkedContacts, setLinkedContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/client-contacts`) 
      .then((response) => {
        setLinkedContacts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching linked clients:", error);
        setIsLoading(false);
      });
  }, []);

  const handleLinkClient = () => {
    // test
    alert('Redirecting to link a new client...'); 
  };

  if (isLoading) {
    return <div className='text-dark'>Loading...</div>
  }
    
  return (
    <div>
      {linkedClients.length === 0 ? (
        <div>
          <p>No clients found</p>
          <button onClick={handleLinkClient}>Link a Client</button>
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