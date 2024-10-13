import React from 'react';

export default function ClientsContactsTab() {
    
  return (
    <div>
      <label>
        Client Name:
        <input type="text" />
      </label>
      <label>
        Client Code:
        <input type="text" readOnly />
      </label>
      <button>Save</button>
    </div>
  );
}
