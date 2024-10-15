import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ClientsGeneralTab() {
  const { code } = useParams(); 
  const [clientName, setClientName] = useState('');
  const [originalClientName, setOriginalClientName] = useState('');
  const [clientCode, setClientCode] = useState('');

  useEffect(() => {
    if (code) { 
      axios.get(`http://localhost:5000/api/clients/${code}`)
        .then((response) => {
          const client = response.data;
          setClientName(client.name);
          setOriginalClientName(client.name);
          setClientCode(client.code);
        })
        .catch((error) => {
          console.error("There was an error fetching the client data!", error);
        });
    }
  }, [code]);

  const handleSave = () => {
    if (clientName !== originalClientName) {
      axios.put(`http://localhost:5000/api/clients/${code}`, { name: clientName })
        .then(() => {
          alert('Client name updated successfully');
          setOriginalClientName(clientName); 
        })
        .catch((error) => {
          console.error("There was an error updating the client name!", error);
        });
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Client Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="clientCode" className="form-label">Client Code:</label>
        <input
          type="text"
          className="form-control"
          id="clientCode"
          value={clientCode}
          readOnly
        />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
}
