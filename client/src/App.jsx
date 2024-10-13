import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestAPI from './components/TestAPI';
import ClientsPage from './components/Clients/ClientsPage';
import ContactsPage from './components/Contacts/ContactsPage';
// import ClientsDetails from './components/Clients/ClientsDetails';
// import ContactsDetails from './components/Contacts/ContactsDetails';
import CreateClient from './components/Clients/CreateClient';
// import CreateContact from './components/Contacts/CreateContact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<TestAPI />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/new" element={<CreateClient />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
