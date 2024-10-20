
# Client Contact Base

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Frontend Interface](#frontend-interface)
  - [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Additional Notes](#additional-notes)
- [Contributing](#contributing)
- [License](#license)

## Overview
**Client Contact Base** is a web-based application built with React and Node.js that allows users to manage client-contact relationships. Users can create, update, view, and delete clients and contacts, as well as link clients to specific contacts and vice versa. This platform is ideal for managing relationships in small business environments, where keeping track of client contacts is essential.

## Features
- **Client Management:** Add, view, edit, and delete client information.
- **Contact Management:** Add, view, edit, and delete contact information.
- **Linking Clients and Contacts:** Link clients to contacts and view all linked relationships in both directions.
- **Dynamic UI with React:** Seamless navigation and real-time updates.
- **RESTful API:** Built with Express to handle CRUD operations and client-contact relationships.

## Setup

### Prerequisites
- Node.js (version 14.x or later)
- MySQL (version 8.x or compatible)
- npm (comes with Node.js)
  
### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/client-contact-base.git
   cd client-contact-base
   ```

2. **Install Dependencies for Backend:**
   ```bash
   cd server
   npm install
   ```

3. **Install Dependencies for Frontend:**
   ```bash
   cd ../client
   npm install
   ```

### Database Setup
1. **Create the MySQL Database:**
   Open MySQL and create a new database:
   ```sql
   CREATE DATABASE client_contact_db;
   USE client_contact_db;
   ```

2. **Run the Database Script:**
   Import the provided SQL schema and seed data from the `/server/db` folder:
   ```bash
   mysql -u yourUsername -p client_contact_db < /path/to/schema.sql
   ```

3. **Configure the Database Connection:**
   In the `/server/config.js` file, configure your MySQL connection:
   ```javascript
   module.exports = {
     host: 'localhost',
     user: 'yourUsername',
     password: 'yourPassword',
     database: 'client_contact_db'
   };
   ```

### Running the Application

1. **Start the Backend Server:**
   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Application:**
   Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   npm start
   ```

3. **Open in Browser:**
   The frontend will usually run on `http://localhost:3000`, and the backend API is available on `http://localhost:5000`.

## Usage

### Frontend Interface
- **Home Page:** Contains links to both the Clients and Contacts sections.
- **Clients Page:** View and manage all clients, including creating new clients and viewing linked contacts.
- **Contacts Page:** View and manage all contacts, including creating new contacts and viewing linked clients.
- **Linking Clients & Contacts:** In the `ClientsContactsTab` component, you can link clients to contacts through the form provided, or unlink existing connections.

### API Endpoints
- **GET /api/clients:** Retrieve all clients.
- **GET /api/contacts:** Retrieve all contacts.
- **POST /api/client-contact:** Create a new client-contact relationship.
- **GET /api/client-contacts?clientId=:** Retrieve contacts linked to a specific client.
- **GET /api/client-contacts?contactId=:** Retrieve clients linked to a specific contact.

## Technologies Used
- **Frontend:** React, Bootstrap, Axios
- **Backend:** Node.js, Express, MySQL
- **Other:** Axios for HTTP requests, MySQL for relational data storage, CSS for styling

## Additional Notes
- **Error Handling:** Both frontend and backend implement basic error handling for common issues, such as connection failures or missing data.
- **Form Validation:** The application includes validation for forms, ensuring data is complete and in the correct format before submission.
- **Code Modularity:** The project is organized with modular components for ease of development and scalability.
- **Responsive Design:** The frontend interface is designed to be responsive, allowing it to be used across various screen sizes.

## Contributing
We welcome contributions to improve Client Contact Base! Here’s how you can help:
1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Commit your changes** (`git commit -m 'Add YourFeature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Create a Pull Request** and explain your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
