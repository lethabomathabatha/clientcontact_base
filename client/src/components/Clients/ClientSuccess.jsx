import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ClientSuccess() {
    
    return (
        <div className="success-container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="success-message text-center">
                <h1 className="fw-bold fs-3">Success!</h1>
                <p className="lead">Contact successfully created!</p>
                <Link to="/clients" className="mt-2">
                    <Button className='back-btn'>
                        View Clients
                    </Button>
                </Link>
            </div>
        </div>
    )
}
