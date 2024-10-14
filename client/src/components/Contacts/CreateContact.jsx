import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function CreateContact() {
    const [contactData, setContactData] = useState([
        {
            contact_name: '',
            contact_surname: '',
            contact_email: ''
        }
    ]);
    const [validated, setValidated] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');
    const navigate = useNavigate()

    const handleClientSubmit = (e) => {
        e.preventDefault();

        // check if client_name is empty
        if (!client_name) {
            setValidationMsg("Client Name is required.");
            setValidated(false);
            return;
        } else {
            setValidationMsg('');
            setValidated(true);
        }

        // submit client creation form
        axios.post('http://localhost:5000/create_client', { client_name })
        .then((res) => {
            navigate('/clients/success')
            console.log(res);   
        })
        .catch((err) => console.log(err))
        
    }
    
    return (
        <>
            <div className='text-center'>
                <div className='fw-bold'>Create Client Form</div>
                <Link to='/' className='btn btn-success'>Back to Home</Link>

                <form onSubmit={handleClientSubmit} noValidate method="post">
                    <div className="form-floating p-2 mb-3">
                        <label htmlFor="client_name">ontat Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="client_name" 
                            placeholder="Client Name" 
                            name="client_name" 
                            required
                            value={client_name} 
                            onChange={(e) => setContactData(e.target.value)}  
                        />
                        {validationMsg && (
                            <div className="text-danger">{validationMsg}</div>
                        )}                  
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Create Contact
                    </button>  
                </form>  
            </div>
        </>
    )
}