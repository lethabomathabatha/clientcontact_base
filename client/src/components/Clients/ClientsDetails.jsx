import React, { useState } from 'react';
import ClientsGeneralTab from '../Clients/ClientsUpdateTabs/ClientsGeneralTab';
import ClientsContactsTab from '../Clients/ClientsUpdateTabs/ClientsContactsTab';
import { Link } from 'react-router-dom'
import { FiChevronLeft } from "react-icons/fi";
import axios from 'axios';

export default function ClientDetails() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className=" m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
      <Link to='/clients' className=' back-btn text-decoration-none text-white mb-3'>
        <FiChevronLeft />
        Back to Clients
      </Link>

      <div className="custom-header-section d-flex justify-content-between align-items-center">
        <p className="custom-header text-lowercase fw-bold">Client details</p>
           
        <Link to="/link">
          <button className="custom-create-btn fw-light px-4 ">+ Create Contact Connection</button>
        </Link>
        
      </div>

      <div className="d-flex flex-row mx-auto justify-content-center gap-2 align-items-center my-4">
        <button onClick={() => setActiveTab('general')} className='custom-create-btn border border-dark'>General</button>
        <button onClick={() => setActiveTab('contacts')} className='custom-create-btn border border-dark '>Contacts</button>
      </div>

      {activeTab === 'general' && <ClientsGeneralTab />}
      {activeTab === 'contacts' && <ClientsContactsTab />}
    </div>
  );
}
