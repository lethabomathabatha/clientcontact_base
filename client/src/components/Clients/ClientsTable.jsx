import React from 'react';
import { Link } from 'react-router-dom';
import ClientsTable from './ClientsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientsPage() {
    return (
        <div className="text-white">
            <Link to="/" className="btn btn-success mb-3">Back to Home</Link>

            <div className="header-section p-3">
                <h1 className="fw-bold">Clients</h1>
                <Link to="/clients/new" className="bg-yellow fs-6 rounded px-4 py-2 text-dark">
                    + Create New Client
                </Link>
            </div>

            <div className="container-fluid">
                <ClientsTable />
            </div>
        </div>
    );
}
