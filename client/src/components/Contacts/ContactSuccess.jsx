import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ContactSuccess() {
    
    return (
        <>
            <div>Contact Successfully created!</div>
            <Link to="/contacts">
                <button>View Contacts</button>
            </Link>
        </>
    )
}