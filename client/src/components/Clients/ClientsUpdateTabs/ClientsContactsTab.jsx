import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ClientsContactsTab() {
  const { id: clientId } = useParams();
  const [linkedContacts, setLinkedContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch linked contacts for client
    if (clientId) {
      axios.get(`http://localhost:5000/api/client-contacts?clientId=${clientId}`)
        .then((response) => {
          setLinkedContacts(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching linked contacts:", error);
          setIsLoading(false);
        });
    }
  }, [clientId]);

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
            <div>Contact Name: {contact.name}</div>
            <div>Contact Surname: {contact.contact_surname}</div>
            <div>Contact Emails: {contact.email} </div>
            <button>Unlink Contact</button>
          </div>
        ))
      )}
    </div>
  );
}
