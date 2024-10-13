import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Home() {
    
    return (
        <>
            <div>Welcome to your Client - Contact Base</div>
            <Link to="/clients">
                <button>Clients</button>
            </Link>
            <Link to="/contacts">
                <button>Contacts</button>
            </Link>
        </>
    )
}