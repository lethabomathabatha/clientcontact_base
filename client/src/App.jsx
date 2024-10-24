import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestAPI from './components/TestAPI';
import ClientsPage from './components/Clients/ClientsPage';
import ContactsPage from './components/Contacts/ContactsPage';
import ClientsDetails from './components/Clients/ClientsDetails';
import ContactsDetails from './components/Contacts/ContactsDetails';
import CreateClient from './components/Clients/CreateClient';
import CreateContact from './components/Contacts/CreateContact';
import ClientSuccess from './components/Clients/ClientSuccess';
import ContactSuccess from './components/Contacts/ContactSuccess';
import ClientsGeneralTab from './components/Clients/ClientsUpdateTabs/ClientsGeneralTab';
import LinkClientContact from './components/Clients/LinkClientContact';
import ClientsContactsTab from './components/Clients/ClientsUpdateTabs/ClientsContactsTab';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<TestAPI />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/client/:code" element={<ClientsDetails />} />
        
        <Route path="/contacts/:id" element={<ContactsDetails />} />
        <Route path="/clients/new" element={<CreateClient />} />
        <Route path="/contacts/new" element={<CreateContact />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route path="/client" element={<ClientsDetails />} /> */}
        {/* <Route path="/contacts/:contact_id" element={<ContactsDetails />} /> */}
        <Route path="/clients/success" element={<ClientSuccess />} />
        <Route path="/contacts/success" element={<ContactSuccess />} />

        <Route path="/clients/:client_id/general" element={<ClientsGeneralTab />} />
        <Route path="/clients/:code/:id" component={ClientsContactsTab} />


        <Route path="/link" element={<LinkClientContact />} />
      </Routes>
    </BrowserRouter>
  )
}
