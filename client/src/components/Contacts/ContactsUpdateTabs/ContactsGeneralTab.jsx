import React from 'react';

export default function ContactsGeneralTab() {
    
  return (
    <div>
      <label>
        Contacts Name:
        <input type="text" />
      </label>
      <label>
        Contacts Surname:
        <input type="text" />
      </label>
      <label>
        Contacts Email:
        <input type="email" />
      </label>
      <button>Save</button>
    </div>
  );
}
