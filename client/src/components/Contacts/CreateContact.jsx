import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function CreateContact() {
    const [contact_name, setContactName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact_name);
    }
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Create Contact Form</div>

                <form action="" onSubmit={handleSubmit} method="">
                    <label>
                        Contact Name:
                        <input type="text" value={contact_name} onChange={(e) => setContactName(e.target.value)} />
                    </label>
                    <button type="submit">Create Contact</button>  
                </form>  
            </div>
        </>
    )
}