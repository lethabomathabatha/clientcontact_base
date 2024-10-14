import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ClientSuccess() {
    
    return (
        <>
            <div>Client Successfully created!</div>
            <Link to="/clients">
                <button>View Clients</button>
            </Link>
        </>
    )
}