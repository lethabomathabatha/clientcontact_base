// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ClientsTable() {

    // dummy client data
    const clients = [
        { client_id: 1, client_name: 'Santam', client_code: 'SAN001', contactsCount: 3 },
        { client_id: 2, client_name: 'First National Bank', client_code: 'FNB001', contactsCount: 1 },
        { client_id: 3, client_name: 'Oracle', client_code: 'ORA001', contactsCount: 5 }
    ]
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Clients Table</div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Client Name</th>
                        <th>Client Code</th>
                        <th>Number of Contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                        <tr key={client.client_id}>
                            <td><Link to={`/clients/${client.client_id}`}>{client.client_name}</Link></td>
                            <td>{client.client_code}</td>
                            <td>{client.contactsCount}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
              
            </div>
        </>
    )
}