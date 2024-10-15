import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ContactsGeneralTab() {
  const { id } = useParams(); 
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [originalContactName, setOriginalContactName] = useState('');
  // const [clientCode, setClientCode] = useState('');

  useEffect(() => {
    if (id) { 
      axios.get(`http://localhost:5000/api/contact/${id}`)
        .then((response) => {
          const client = response.data;
          setContactName(contact.name);
          setOriginalContactName(contact.name);
          // setClientCode(client.code);
        })
        .catch((error) => {
          console.error("There was an error fetching the contact data!", error);
        });
    }
  }, [id]);

  const handleSave = () => {
    if (contactName !== originalContactName) {
      axios.put(`http://localhost:5000/api/contacts/${id}`, { name: contactName })
        .then(() => {
          alert('Contact name updated successfully');
          setOriginalContactName(contactName); 
        })
        .catch((error) => {
          console.error("There was an error updating the contact name!", error);
        });
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Contact Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact_surname" className="form-label">Contact Surname:</label>
        <input
          type="text"
          className="form-control"
          id="contact_surname"
          value={contactSurname}
          onChange={(e) => setContactSurname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Contact Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
}
