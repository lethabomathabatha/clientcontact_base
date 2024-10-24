import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ClientsContactsTab() {
  const { code: clientCode } = useParams();
  const { id: clientId } = useParams();
  const [linkedContacts, setLinkedContacts] = useState([]); 
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

   // handle unlinking
  const handleUnlinkContact = (contactId) => {
    axios.delete(`http://localhost:5000/api/client-contact?clientId=${clientId}&contactId=${contactId}`)
      .then((response) => {
        // Filter out the unlinked client from the state
        setLinkedContacts((prevContacts) => 
          prevContacts.filter(contact => contact.id !== contactId)
        );
        console.log("Contact unlinked successfully:", response.data);
        alert("Contact unlinked successfully");
      })
      .catch((error) => {
        alert("Oops... Failed to unlink contact!");
        console.error("Error unlinking Contact:", error);
      });
  };

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
            <button onClick={() => handleUnlinkContact(contact.id)}>Unlink Contact</button>
          </div>
        ))
      )}
    </div>
  );
}
