import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ContactsGeneralTab() {
  const { id } = useParams(); 
  const [contactData, setContactData] = useState({
    name: '',
    contact_surname: '',
    email: ''
  }); 

useEffect(() => {
  console.log(`first ${id}`)
  if (id) { 
    console.log(`second ${id}`)
    axios.get(`http://localhost:5000/api/contacts/${id}`)
      .then((response) => {
        const contact = response.data[0];
        setContactData(contact);        
      })
      .catch((error) => {
        console.error("There was an error fetching the contact data!", error);
      });
  }
}, [id]);


// function to save updates to existing contact entry
/*  const handleSave = () => {
    if (contactData.name !== originalContactData.name) {
      axios.put(`http://localhost:5000/api/contacts/${id}`, { name: contactData.name })
        .then(() => {
          alert('Contact name updated successfully');
          setOriginalContactData(contactData.name); 
        })
        .catch((error) => {
          console.error("There was an error updating the contact name!", error);
        });
    }
  }; */

  return (
    <div style={{ width: '25%'}}>
      <div className="mb-4">
        <label htmlFor="name" className="form-label fw-bold text-uppercase m-0">Contact Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={contactData.name}
          placeholder={contactData.name}
          readonly
          disabled
          // onChange={(e) => setContactData.name(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact_surname" className="form-label fw-bold text-uppercase m-0">Contact Surname</label>
        <input
          type="text"
          className="form-control"
          id="contact_surname"
          value={contactData.contact_surname}
          placeholder={contactData.contact_surname}
          readonly
          disabled
          // onChange={(e) => setContactData.contact_surname(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label fw-bold text-uppercase m-0">Contact Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={contactData.email}
          placeholder={contactData.email}
          readonly
          disabled
          // onChange={(e) => setContactData.email(e.target.value)}
        />
      </div>
      {/* <button className="btn btn-primary" onClick={handleSave}>Save</button> */}
    </div>
  );
}
