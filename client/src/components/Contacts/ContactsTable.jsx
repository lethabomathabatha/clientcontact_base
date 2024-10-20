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
            <p className='text-dark'>Loading...</p>
        ) : (
            contacts.length > 0 ? (
            <table className="table table-striped fs-5">
                <thead>
                    <tr>
                        <th className='text-start'>Contact Name</th>
                        <th className='text-start'>Contact Surname</th>
                        <th className='text-start'>Contact Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td className='text-start'><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
                                <td className='text-start'><Link to={`/contacts/${contact.id}`}>{contact.contact_surname}</Link></td>
                                <td className='text-start'>{contact.email}</td>
                                <td className='align-middle'>{contact.client_count}</td> 
                            </tr>
                        ))}
                    </tbody>
            </table>
                    ) : (
                        <div className='text-dark fw-bold'>
                            No contacts found
                        </div>
                    )
                    )}
    </div>
);
}
