import React, { useState } from 'react';
import ContactsGeneralTab from '../Contacts/ContactsUpdateTabs/ContactsGeneralTab';
import ContactsClientsTab from '../Contacts/ContactsUpdateTabs/ContactsClientsTab';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import axios from 'axios';

export default function ContactsDetails() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className=" m-5 mx-auto justify-content-center d-flex flex-column align-items-center">
      <Link to='/contacts' className=' back-btn text-decoration-none text-white mb-3'>
        <FiChevronLeft />
        Back to Contacts
      </Link>

      <div class="custom-header-section d-flex justify-content-between align-items-center">
        <p class="custom-header text-lowercase fw-bold">contact </p>
           
        <Link to="/contacts/new">
          <button class="custom-create-btn fw-light px-4 ">+ Create Client Connection</button>
        </Link>
      </div>

      <div className="d-flex flex-row mx-auto justify-content-center gap-2 align-items-center my-4">
        <button onClick={() => setActiveTab('general')} className='custom-create-btn border border-dark'>General</button>
        <button onClick={() => setActiveTab('clients')} className='custom-create-btn border border-dark '>Clients</button>
      </div>

      {activeTab === 'general' && <ContactsGeneralTab />}
      {activeTab === 'clients' && <ContactsClientsTab />}
    </div>
  );
}
