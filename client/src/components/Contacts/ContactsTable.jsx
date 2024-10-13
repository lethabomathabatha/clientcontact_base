// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactsTable() {

    // dummy contacts data
    const contacts = [
        { contact_id: 1, contact_name: 'Sally', contact_surname: 'Moore', clientsCount: 3 },
        { contact_id: 2, contact_name: 'Filly', contact_surname: 'Gayle', clientsCount: 1 },
        { contact_id: 3, contact_name: 'Orange', contact_surname: 'Apple', clientsCount: 5 }
    ]
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Contacts Table</div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>
                            <Link to="/contacts/:contact_id">Contacts Name</Link>
                        </th>
                        <th>Client Surname</th>
                        <th>Number of Clients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                        <tr key={contact.contact_id}>
                            <td><Link to={`/contacts/${contact.contact_id}`}>{contact.contact_name}</Link></td>
                            {/* <td>{contact.contact_code}</td> */}
                            <td>{contact.contact_surname}</td>
                            <td>{contact.clientsCount}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
              
            </div>
        </>
    )
}