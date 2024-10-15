import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css'; 
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Home() {
    return (
      <div fluid className="hero-section text-white">
            
        {/* Main Header Content */}
        <Row className="d-flex justify-content-center align-items-center min-vh-100 text-center">
          <Col md={6} className="px-2">
            <h1>CC Base Efficiently Organizes Your Client and Contact Information</h1>
            <p className="lead">I want to see...</p>

            <Link to="/clients">
            <Button variant="warning" className="ms-2 fs-5 px-4">Clients</Button>
            </Link>
            <Link to="/contacts">
            <Button variant="warning" className="ms-2 fs-5 px-4">Contacts</Button>
            </Link>
          </Col>
        </Row>
  
       
      </div>
    );
  }
  

  

{/* <Link to="/clients">
<button className="custom-red-btn">Clients</button>
</Link>
<Link to="/contacts">
<button>Contacts</button>
</Link> */}