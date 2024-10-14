import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ContactsTable from './ContactsTable';

import { Link } from 'react-router-dom';

export default function ContactsPage() {
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Contacts</div>

                {/* search bar to search existing clients from table */}
                <input type="text" placeholder="Search contacts..." />
                <br />
                <Link to="/contacts/new">
                    <button>Create New Contact</button>
                </Link>
                <ContactsTable />
            </div>
        </>
    )
}