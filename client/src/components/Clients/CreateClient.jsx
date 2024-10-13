import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function CreateClient() {
    const [client_name, setClientName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(client_name);
    }
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Create Client Form</div>

                <form action="" onSubmit={handleSubmit} method="">
                    <label>
                        Client Name:
                        <input type="text" value={client_name} onChange={(e) => setClientName(e.target.value)} />
                    </label>
                    <button type="submit">Create Client</button>  
                </form>  
            </div>
        </>
    )
}