import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";

export default function CreateContact() {
    const [contactData, setContactData] = useState({
        name: '',
        contact_surname: '',
        email: ''
    });
    const [validationMsgs, setValidationMsgs] = useState({
        name: '',
        contact_surname: '',
        email: ''
    });
    const navigate = useNavigate();

    const handleContactSubmit = (e) => {
        e.preventDefault();

        // Validate each field
        let hasError = false;
        const errors = {};

        if (!contactData.name) {
            errors.name = "Contact Name is required.";
            hasError = true;
        }
        if (!contactData.contact_surname) {
            errors.contact_surname = "Contact Surname is required.";
            hasError = true;
        }
        if (!contactData.email) {
            errors.email = "Contact Email is required.";
            hasError = true;
        }

        setValidationMsgs(errors);

        if (hasError) return;

        // clear validation messages and submit data
        axios.post('http://localhost:5000/api/contact', contactData)
            .then((res) => {
                navigate('/contacts/success');
                console.log(res);   
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="text-whit m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
            
            <Link to='/contacts' className=' back-btn text-decoration-none text-white'>
                <FiChevronLeft />
                Back to Contacts
            </Link>

            <div class="custom-header-section d-flex justify-content-between align-items-center">
                <p class="custom-header text-lowercase fw-bold">Create a new contact</p>           
            </div>

            <form onSubmit={handleContactSubmit} noValidate method="post">
                <div className="row mb-3 px-1">
                    <div className="col-md-6 form-floating p-2">
                        <label htmlFor="name">Contact Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Contact Name" 
                            name="name" 
                            required
                            value={contactData.name} 
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}  
                        />
                        {validationMsgs.name && (
                            <div className="text-danger">{validationMsgs.name}</div>
                        )}
                    </div>
                    <div className="col-md-6 form-floating p-2 px">
                        <label htmlFor="contact_surname">Contact Surname</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="contact_surname" 
                            placeholder="Contact Surname" 
                            name="contact_surname" 
                            required
                            value={contactData.contact_surname} 
                            onChange={(e) => setContactData({ ...contactData, contact_surname: e.target.value })}  
                        />
                        {validationMsgs.contact_surname && (
                            <div className="text-danger">{validationMsgs.contact_surname}</div>
                        )}
                    </div>
                </div>
                <div className="form-floating p-2 mb-3 px-0">
                    <label htmlFor="email">Contact Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Contact Email" 
                        name="email" 
                        required
                        value={contactData.email} 
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}  
                    />
                    {validationMsgs.email && (
                        <div className="text-danger">{validationMsgs.email}</div>
                    )}
                </div>

                <button type="submit" className="custom-create-btn border">
                    Create Contact
                </button>  
            </form>    
        </div>
    );
}
