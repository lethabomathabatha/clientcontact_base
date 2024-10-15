import React, { useState } from 'react';
import ContactsGeneralTab from '../Contacts/ContactsUpdateTabs/ContactsGeneralTab';
import ContactsClientsTab from '../Contacts/ContactsUpdateTabs/ContactsClientsTab';
import { Link } from 'react-router-dom'

export default function ContactsDetails() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <Link to='/contacts' className='btn btn-success'>Back to Contacts</Link>

      <button onClick={() => setActiveTab('general')}>General</button>
      <button onClick={() => setActiveTab('clients')}>Clients</button>

      {activeTab === 'general' && <ContactsGeneralTab />}
      {activeTab === 'clients' && <ContactsClientsTab />}
    </div>
  );
}
