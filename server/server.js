const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientcontact",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database as ID", db.threadId);
});

// 
const generateUniqueCode = (baseCode, callback) => {
  let i = 1;

  const checkCode = (code) => {
    const newCode = `${code}${String(i).padStart(3, "0")}`;
    const query = "SELECT * FROM client WHERE code = ?";
    db.query(query, [newCode], (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }

      if (results.length === 0) {
        callback(null, newCode);
      } else {
        i++;
        checkCode(code);
      }
    });
  };

  checkCode(baseCode);
};

// Function to get the next ID from the client table
const getNextClientId = (name, callback) => {
  //generate the alpha code
  const words = name.split(" ");
  let code;
  if (words.length > 2) {
    code = words.map((word) => word[0].toUpperCase()).join("");
  } else {
    code = name.substring(0, 3).toUpperCase();
    while (code.length < 3) {
      code += String.fromCharCode(65 + Math.floor(Math.random() * 26)); 
    }
  }

  //generate the numeric code
  generateUniqueCode(code, (err, uniqueCode) => {
    if (err) {
      console.error("Error generating unique code:", err);
    } else {
      console.log("Generated unique code:", uniqueCode);
      callback(null, uniqueCode);
    }
  });

};

// Create client
app.post("/api/client", (req, res) => {
  const { name } = req.body;
  getNextClientId(name, (err, code) => {
    console.log("we got the code " + code);
    console.log(err);
    const query = "INSERT INTO client (name, code) VALUES (?, ?)";
    db.query(query, [name, code], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: result.insertId });
      }
    });
  });
});

// Edit client
app.put("/api/client/:id", (req, res) => {
  const { id } = req.params;
  const { name, code } = req.body;
  const query = "UPDATE client SET name = ?, code = ? WHERE id = ?";
  db.query(query, [name, code, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: "Client updated successfully" });
    }
  });
});

app.get("/api/clients/:code", (req, res) => {
    const { code } = req.params;
    const query = "SELECT * FROM client WHERE code = ?";
    db.query(query, [code], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).json({ message: "Client not found" });
      }
    });
  });
  

// Create contact
app.post("/api/contact", (req, res) => {
  const { name, contact_surname, email } = req.body;
  const query =
    "INSERT INTO contact (name, contact_surname, email) VALUES (?, ?, ?)";
  db.query(query, [name, contact_surname, email], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId });
    }
  });
});

// Edit contact
app.put("/api/contact/:id", (req, res) => {
  const { id } = req.params;
  const { name, contact_surname, email } = req.body;
  const query =
    "UPDATE contact SET name = ?, contact_surname = ?, email = ? WHERE id = ?";
  db.query(query, [name, contact_surname, email, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: "Contact updated successfully" });
    }
  });
});

// Create client-contact relationship
app.post("/api/client-contact", (req, res) => {
  const { client, contact } = req.body;
  const query = "INSERT INTO client_contact (client, contact) VALUES (?, ?)";
  db.query(query, [client, contact], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId });
    }
  });
});

// Count client-contact relationships
app.get("/api/client-contacts/count", (req, res) => {
    const query = `
      SELECT c.id, c.name, c.code, COUNT(cc.contact) AS contact_count
      FROM client c
      LEFT JOIN client_contact cc ON c.id = cc.client
      GROUP BY c.id
    `;
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json(results);
      }
    });
  });
  

// Get all clients
app.get("/api/clients", (req, res) => {
  const query = "SELECT * FROM client";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get client by id
app.get("/api/clients/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM client where id = ? ";
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get all contacts
app.get("/api/contacts", (req, res) => {
    const query = `
      SELECT c.id, c.name, c.contact_surname, c.email, COUNT(cc.client) AS client_count
      FROM contact c
      LEFT JOIN client_contact cc ON c.id = cc.contact
      GROUP BY c.id
    `;
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json(results);
      }
    });
  });
  

// Get client by id
app.get("/api/contacts/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM contact where id = ? ";
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get all client-contact relationships
// app.get("/api/client-contacts", (req, res) => {
//   const query = `
//       SELECT cc.id, c.name as client_name, ct.name as contact_name, ct.email
//       FROM client_contact cc
//       JOIN client c ON cc.client = c.id
//       JOIN contact ct ON cc.contact = ct.id
//   `;
//   db.query(query, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// Get client-contact relationships, optionally filtered by contact_id or client_id
app.get("/api/client-contacts", (req, res) => {
  const { contactId, clientId  } = req.query;
  let query = `
    SELECT cc.id, c.name AS client_name, c.code AS client_code, ct.name AS contact_name, ct.email 
    FROM client_contact cc
    JOIN client c ON cc.client = c.id
    JOIN contact ct ON cc.contact = ct.id
  `;

  if (contactId) {
    query += ` WHERE cc.contact = ?`;
  } else if (clientId) {
    query += ` WHERE cc.client = ?`;
  }
  
  if (contactId || clientId) {
    query += ` ORDER BY c.name`;
  }

  db.query(query, contactId ? [contactId] : clientId ? [clientId] : [], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});


// Delete client-contact relationship
app.delete("/api/client-contact", (req, res) => {
  const { clientId, contactId } = req.query;

  // Validate input
  if (!clientId || !contactId) {
    return res.status(400).json({ error: "Both clientId and contactId are required." });
  }

  const query = "DELETE FROM client_contact WHERE client = ? AND contact = ?";
  
  db.query(query, [clientId, contactId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Client-contact relationship not found." });
    } else {
      res.status(200).json({ message: "Client unlinked successfully." });
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});