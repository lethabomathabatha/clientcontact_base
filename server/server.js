const express = require('express');
const mysql = require('mysql');
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

const port = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});