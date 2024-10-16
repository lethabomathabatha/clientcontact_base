import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ClientsContactsTab() {
  const { code: clientCode } = useParams();
  const [linkedContacts, setLinkedContacts] = useState([]); // Initialize as an array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (clientCode) {
      axios.get(`http://localhost:5000/api/client-contacts?clientCode=${clientCode}`)
      // http://localhost:5000/api/client-contacts?clientCode=PRO001
        .then((response) => {
          console.log(response.data);
          setLinkedContacts(response.data); 
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching linked contacts:", error);
          setIsLoading(false);
        });
    }
  }, [clientCode]);

  if (isLoading) {
    return <div className="text-dark">Loading...</div>;
  }

  return (
    <div>
      {linkedContacts.length === 0 ? (
        <div>
          <p>No contacts found</p>
          <button><Link to="/link">Link a Contact</Link></button>
        </div>
      ) : (
        linkedContacts.map((contact) => ( 
          <div key={contact.id}>
            <p>Name: {contact.contact_name}</p>

            <p>Email: {contact.email}</p>
          </div>
        ))
      )}
    </div>
  );
}
