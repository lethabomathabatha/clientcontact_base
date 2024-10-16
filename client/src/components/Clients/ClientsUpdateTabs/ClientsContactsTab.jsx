import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ClientsContactsTab() {
  const { id: contactId } = useParams();
  const [linkedContacts, setLinkedContacts] = useState({
    name: '',
    contact_surname: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contactId) {
      axios.get(`http://localhost:5000/api/client-contacts?contactId=${contactId}`)
        .then((response) => {
          console.log( response.data);
          setLinkedContacts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching linked contacts:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [contactId]);
  

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
        // map through the linked contact's array to retrieve name surname and email
        linkedContacts.map((contact) => (
          <div key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Surname: {contact.contact_surname}</p>
            <p>Email: {contact.email}</p>
          </div>
        ))
      )}
    </div>
  );
}
