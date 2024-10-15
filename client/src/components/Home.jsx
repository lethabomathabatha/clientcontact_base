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

        {/* Main Header Content */}
        <div className="d-flex justify-content-center align-items-center text-center">
          <div className="px-2 w-75">
            <h1 className='fw-light'>Client Contact Base Efficiently Organizes Your <strong className="fw-bold">Client and Contact Information</strong></h1>
            
            <br />
            <p className="lead">I want to see...</p>

            <div className='home-btn-container'>
              <Link to="/clients">
                <Button variant="warning" className="home-btn ms-2 fs-5 px-4">Clients</Button>
              </Link>
              <Link to="/contacts">
                <Button variant="warning" className="home-btn ms-2 fs-5 px-4">Contacts</Button>
              </Link>
            </div>
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
