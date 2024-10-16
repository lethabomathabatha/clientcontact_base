import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientsContactsTab() {
  const [linkedContacts, setLinkedContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch linked contacts for client
    axios.get(`http://localhost:5000/api/client-contacts`) 
      .then((response) => {
        setLinkedContacts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching linked contacts:", error);
        setIsLoading(false);
      });
  }, []);

  const handleLinkContact = () => {
    // test
    alert('Redirecting to link a new contact...(test)'); 
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {linkedClients.length === 0 ? (
        <div>
          <p>No contacts found</p>
          <button onClick={handleLinkContact}>Link a Contact</button>
        </div>
      ) : (
        linkedContacts.map((contact, index) => (
          <div key={index}>
            <div>Client Name: {contact.contact_name}</div>
            <div>Client Code: {contact.contact_code}</div>
            <button>Unlink Contact</button>
          </div>
        ))
      )}
    </div>
  );
}
