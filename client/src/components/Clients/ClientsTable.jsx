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
        <div className='text-center custom-table'>
            <div className='fw-bold'>Clients Table</div>

            {loading ? (
                <p className='text-dark'>Loading...</p>
            ) : (
                clients.length > 0 ? (
                    <table className="table table-stripe fs-5">
                        <thead>
                            <tr>
                                <th className='text-start'>Client Name</th>
                                <th className='text-start'>Client Code</th>
                                <th className=''></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td className='text-start'><Link to={`/client/${client.code}`}>{client.name}</Link></td>
                                    <td className='text-start'>{client.code}</td>
                                    <td className='align-middle round-number'>{client.contact_count}</td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className='text-dark fw-bold'>
                        No clients found
                    </div>
                ))}
        </div>
    );
}
