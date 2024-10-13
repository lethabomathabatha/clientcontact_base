import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ClientsTable from './ClientsTable';

import { Link } from 'react-router-dom';

export default function ClientsPage() {
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Clients</div>

                {/* search bar to search existing clients from table */}
                <input type="text" placeholder="Search clients..." />
                <br />
                <Link to="/clients/new">
                    <button>Create New Client</button>
                </Link>
                <ClientsTable />
            </div>
        </>
    )
}