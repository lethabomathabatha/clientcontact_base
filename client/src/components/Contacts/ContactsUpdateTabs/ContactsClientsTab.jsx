import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ContactsClientsTab() {
  const { id: contactId } = useParams();
  const [linkedClients, setLinkedClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contactId) {
      axios.get(`http://localhost:5000/api/client-contacts?contactId=${contactId}`)
        .then((response) => {
          setLinkedClients(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          alert("Oops... Failed to unlink client!");
          console.error("Error fetching linked clients:", error);
          setIsLoading(false);
        });
    }
  }, [contactId]);


  // handle unlinking
  const handleUnlinkClient = (clientId) => {
    console.log('clicked')
    console.log("Client ID:", clientId, "Contact ID:", contactId);
    axios.delete(`http://localhost:5000/api/client-contact?clientId=${clientId}&contactId=${contactId}`)
      .then((response) => {
        // Filter out the unlinked client from the state
        setLinkedClients((prevClients) => 
          prevClients.filter(client => client.id !== clientId)
        );
        console.log("Client unlinked successfully:", response.data);
        alert("Client unlinked successfully");
      })
      .catch((error) => {
      alert("Oops... Failed to unlink client!")
        console.error("Error unlinking client:", error);
      });
  };

  if (isLoading) {
    return <div className='text-dark'>Loading...</div>
  }

  return (
    <div className='text-center custom-table'>
      {linkedClients.length === 0 ? (
        <div>
          <p>No clients found</p>
          <button><Link to="/link">Link a Client</Link></button>
        </div>
      ) : (
        
          <table className="table table-stripe fs-6">
            <thead>
                <tr>
                    <th className='text-start'>Client Name</th>
                    <th className='text-start'>Client Code</th>
                    <th className=''></th>
                </tr>
            </thead>
            <tbody>
                {linkedClients.map((client) => (
                    <tr key={client.id}>
                        <td className='text-start'>{client.client_name}</td>
                        <td className='text-start'>{client.client_code}</td>
                        <td className=''><button onClick={() => handleUnlinkClient(client.id)}>Unlink Client</button></td> 
                    </tr>
                ))}
            </tbody>
        </table>          
        
      )}
    </div>
  );
}
