import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactsTable() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch contacts with client 
        axios.get('http://localhost:5000/api/contacts')
            .then((response) => {
                console.log(response.data); 
                setContacts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the contacts!", error);
                setLoading(false);
            });
    }, []);
    
    return (
        <div className='text-center'>
        <div className='fw-bold'>Contacts Table</div>

        {loading ? (
            <p>Loading...</p>
        ) : (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Contact Name</th>
                        <th>Contact Surname</th>
                        <th>Contact Email</th>
                        <th>Number of Clients</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                            <tr key={index}>
                                <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
                                <td><Link to={`/contacts/${contact.id}`}>{contact.contact_surname}</Link></td>
                                <td>{contact.email}</td>
                                <td>{contact.client_count}</td> 
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">No contacts found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )}
    </div>
);
}
