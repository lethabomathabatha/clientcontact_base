import React, { useState } from 'react';
// import ContactsGeneralTab from './Contacts/ContactsUpdateTabs/ContactsGeneralTab';
// import ContactsContactsTab from './Contacts/ContactsUpdateTabs/ContactsClientsTab';

export default function ContactsDetails() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <button onClick={() => setActiveTab('general')}>General</button>
      <button onClick={() => setActiveTab('contacts')}>Clients</button>

      {/* {activeTab === 'general' && <ContactsGeneralTab />} */}
      {/* {activeTab === 'contacts' && <ContactsClientsTab />} */}
    </div>
  );
}

