import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateClient() {
    const [client_name, setClientName] = useState('');
    const navigate = useNavigate()

    const handleClientSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true)

        axios.post('/create_client', client_name)
        .then((res) => {
            navigate('/clients')
            console.log(result);   
        })
        .catch((err) => console.log(err))
        
    }
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Create Client Form</div>
                <Link to='/' className='btn btn-success'>Back to Home</Link>

                <form action="" onSubmit={handleClientSubmit} noValidate validated={validated} method="">
                    <div class="form-floatin">
                        <label for="client_name">Client Name</label>
                        <input 
                            type="text" class="form-control" id="client_name" placeholder="Client Name" name='client_name' required
                            value={client_name} onChange={(e) => setClientName(e.target.value)}  
                        />
                    
                    </div>
                    <button type="submit">Create Client</button>  
                </form>  
            </div>
        </>
    )
}