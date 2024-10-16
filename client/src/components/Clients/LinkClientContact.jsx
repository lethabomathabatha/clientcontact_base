import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FiChevronLeft } from "react-icons/fi";

export default function LinkClientContact() {
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  useEffect(() => {
    // Fetch clients
    axios.get('http://localhost:5000/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error("Error fetching clients:", error));

    // Fetch contacts
    axios.get('http://localhost:5000/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error("Error fetching contacts:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/client-contact', {
      client: selectedClient,
      contact: selectedContact
    })
    .then(response => {
      alert("Client and contact linked successfully!");
      setSelectedClient('');
      setSelectedContact('');
    })
    .catch(error => console.error("Error linking client and contact:", error));
  };

  return (
    <div className=" m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
        <Link to='/clients' className=' back-btn text-decoration-none text-white mb-3'>
            <FiChevronLeft />
            Back to Clients
        </Link>
        <div className="custom-header-section d-flex justify-content-between align-items-center">
            <p className="custom-header text-lowercase fw-bold">Link Client and Contact</p>
        </div>

        <form onSubmit={handleSubmit} className="m-5 p-3 border">        
        <div className="mb-3">
            <label htmlFor="clientSelect" className="form-label">Select Client:</label>
            <select 
            id="clientSelect" 
            className="form-select" 
            value={selectedClient} 
            onChange={(e) => setSelectedClient(e.target.value)}
            required
            >
            <option value="">Choose a client</option>
            {clients.map(client => (
                <option key={client.id} value={client.id}>{client.name}</option>
            ))}
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="contactSelect" className="form-label">Select Contact:</label>
            <select 
            id="contactSelect" 
            className="form-select" 
            value={selectedContact} 
            onChange={(e) => setSelectedContact(e.target.value)}
            required
            >
            <option value="">Choose a contact</option>
            {contacts.map(contact => (
                <option key={contact.id} value={contact.id}>{contact.name} {contact.contact_surname}</option>
            ))}
            </select>
        </div>

        <button type="submit" className="custom-create-btn border">Link</button>
        </form>

    </div>
   
  );
}
