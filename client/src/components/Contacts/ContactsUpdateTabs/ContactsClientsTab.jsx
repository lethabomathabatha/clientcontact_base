import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ContactsClientsTab() {
  const { id: contactId } = useParams();
  const [linkedClients, setLinkedClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contactId) {
      axios.get(`http://localhost:5000/api/client-contacts?contactId=${contactId}`)
        .then((response) => {
          setLinkedClients(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching linked clients:", error);
          setIsLoading(false);
        });
    }
  }, [contactId]);


  // handle unlinking
  const handleUnlinkClient = (clientId) => {
    axios.delete(`http://localhost:5000/api/client-contact?clientId=${clientId}&contactId=${contactId}`)
      .then((response) => {
        // Filter out the unlinked client from the state
        setLinkedClients((prevClients) => 
          prevClients.filter(client => client.id !== clientId)
        );
        console.log("Client unlinked successfully:", response.data);
        alert("Client unlinked successfully");
      })
      .catch((error) => {
        console.error("Error unlinking client:", error);
      });
  };

  if (isLoading) {
    return <div className='text-dark'>Loading...</div>
  }

  return (
    <div>
      {linkedClients.length === 0 ? (
        <div>
          <p>No clients found</p>
          <button><Link to="/link">Link a Client</Link></button>
        </div>
      ) : (
        linkedClients.map((client) => (
          <div key={client.id}>
            <div>Client Name: {client.client_name}</div>
            <div>Client Code: {client.client_code}</div>
            <button onClick={() => handleUnlinkClient(client.id)}>Unlink Client</button>
          </div>
        ))
      )}
    </div>
  );
}
