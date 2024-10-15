import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import ClientsTable from './ClientsTable';
import { FiChevronLeft } from "react-icons/fi";

import { Link } from 'react-router-dom';

export default function ClientsPage() {
    
    return (
        <div className="text-white m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
            <Link to='/' className=' back-btn text-decoration-none text-white'>
                <FiChevronLeft />
                Back to Home
            </Link>
            
              <div class="custom-header-section d-flex justify-content-between align-items-center">
                <p class="custom-header text-lowercase fw-bold">Clients</p>
           
                <Link to="/clients/new">
                    <button class="custom-create-btn fw-light px-4 ">+ Create New Client</button>
                </Link>
            </div>
            
            <ClientsTable />
        </div>
    )
}
