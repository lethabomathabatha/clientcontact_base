const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const corsOptions ={
    origin: ["http://localhost:5173"]
};

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());


app.get("/api", (req, res) => {
    res.json({ fruits: [ "Hello", "World!" ] });
});

// database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cape**123",
    database: "clientcontact_base"
})

// confirm db connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failure:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', db.threadId);
});



const port = 5000;

app.listen(port, () => {
    console.log(`Server listening on ports ${port}`);
});