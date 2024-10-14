import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ClientsTable from './ClientsTable';
// import App.css from
import { Container, Row, Col, Form, Navbar, Nav } from 'react-bootstrap';
// import  { ArrowRight }  from react-icons;
import { FaCoffee } from 'react-icons/fa'


import { Link } from 'react-router-dom';

export default function ClientsPage() {
    
    return (
        <div className="text-white min-vh-100 ">
            <div className='d-flex p-3 flex-row red-gradient align-items-center justify-content-between header-section'>
                <h1 className='fw-bold '>Clients</h1> 
                <Link to="/clients/new" className="bg-yellow fs-6 rounded px-4 py-2 text-dark">
                    + Create New Client 
                </Link>
            </div>
        
            <div className=''>
                {/* search bar to search existing clients from table */}
                {/* <input type="text" placeholder="Search clients..." /> */}
                <br />
                
                <ClientsTable />
            </div>
       
        </div>
    )
}