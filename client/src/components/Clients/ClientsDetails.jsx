import React, { useState } from 'react';
import ClientsGeneralTab from '../Clients/ClientsUpdateTabs/ClientsGeneralTab';
import ClientsContactsTab from '../Clients/ClientsUpdateTabs/ClientsContactsTab';

export default function ClientDetails() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <button onClick={() => setActiveTab('general')}>General</button>
      <button onClick={() => setActiveTab('contacts')}>Contacts</button>

      {activeTab === 'general' && <ClientsGeneralTab />}
      {activeTab === 'contacts' && <ClientsContactsTab />}
    </div>
  );
}
