import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css'; 
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi'

export default function Home() {
    return (
      <div fluid className="hero-section text-white">
        <div className="d-flex flex-row justify-space-between position-top">
        <p>Logo</p>
        <FiMenu />
        </div>
      
        {/* Main Header Content */}
        <div className="d-flex justify-content-center align-items-center text-center">
          <div className="px-2 w-75">
            <h1>CC Base Efficiently Organizes Your Client and Contact Information</h1>
            <p className="lead">I want to see...</p>

            <Link to="/clients">
            <button variant="warning" className=" ms-2 fs-5 px-4">Clients</button>
            </Link>
            <Link to="/contacts">
            <button variant="warning" className=" ms-2 fs-5 px-4">Contacts</button>
            </Link>
          </div>
        </div>
  
       
      </div>
    );
  }
  

  

{/* <Link to="/clients">
<button className="custom-red-btn">Clients</button>
</Link>
<Link to="/contacts">
<button>Contacts</button>
</Link> */}