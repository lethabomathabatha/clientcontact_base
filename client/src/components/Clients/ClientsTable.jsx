import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function ClientsTable() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch clients with contact counts
        axios.get('http://localhost:5000/api/client-contacts/count')
            .then((response) => {
                console.log(response.data); 
                setClients(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the clients!", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='text-center'>
            <div className='fw-bold'>Clients Table</div>

            {loading ? (
                <p className='text-dark'>Loading...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className='text-start'>Client Name</th>
                            <th className='text-start'>Client Code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.length > 0 ? (
                            clients.map((client) => (
                                <tr key={client.id}>
                                    <td className='text-start'><Link to={`/client?code=${client.code}`}>{client.name}</Link></td>
                                    <td className='text-start'>{client.code}</td>
                                    <td className='align-middle'>{client.contact_count}</td> 
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No clients found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}
