import React from 'react';

export default function ContactsClientsTab() {
    
  return (
    <div>
      <label>
        Contact Name:
        <input type="text" />
      </label>
      <label>
        Contact Surname:
        <input type="text" />
      </label>
      <label>
        Contact Email:
        <input type="email" />
      </label>
      <button>Save</button>
    </div>
  );
}
