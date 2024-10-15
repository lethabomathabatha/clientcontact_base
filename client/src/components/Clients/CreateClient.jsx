import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";

export default function CreateClient() {
    const [name, setName] = useState('');
    const [validated, setValidated] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');
    const navigate = useNavigate()

    const handleClientSubmit = (e) => {
        e.preventDefault();

        // check if client_name is empty
        if (!name) {
            setValidationMsg("Client Name is required.");
            setValidated(false);
            return;
        } else {
            setValidationMsg('');
            setValidated(true);
        }

        // submit client creation form
        axios.post('http://localhost:5000/api/client', { name })
        .then((res) => {
            navigate('/clients/success')
            console.log(res);   
        })
        .catch((err) => console.log(err))
        
    }
    
    return (
        <>
            <div className="text-whit m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
                <div className='fw-bold'>Create Client Form</div>
                   <Link to='/' className=' back-btn text-decoration-none text-white'>
                        <FiChevronLeft />
                        Back to Home
                    </Link>

                    <div class="custom-header-section d-flex justify-content-between align-items-center">
                        <p class="custom-header text-lowercase fw-bold">Create a new client</p>           
                    </div>

                <form onSubmit={handleClientSubmit} noValidate method="post">
                    <div className="form-floating p-2 mb-3">
                        <label htmlFor="name">Client Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Client Name" 
                            name="name" 
                            required
                            value={name} 
                            onChange={(e) => setName(e.target.value)}  
                        />
                        {validationMsg && (
                            <div className="text-danger">{validationMsg}</div>
                        )}                  
                    </div>

                    <button type="submit" className="custom-create-btn border">
                        Create Client
                    </button>  
                </form>  
            </div>
        </>
    )
}

// <Form className="d-flex justify-content-center my-4">
// <Form.Control type="email" placeholder="Your email address" className="w-50" />
// <Button variant="warning" className="ms-2">Try it free</Button>
// </Form>
