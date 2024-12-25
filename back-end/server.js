const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'coins'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the db" + err.stack)
    }
    console.log("Connected to the database");
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM coins.categories', (error, results) => {
        res.send(results);
    })
})

// app.post("/admin/api/add", (req, res) => {
//     const {name, face_value, year, price, country, compisition, short_description, full_description, quality, weight, img_observe, img_reverse, category_id} = req.body;

//     connection.query(`INSERT INTO coins (name, face_value, year, price, country, compisition, short_description, full_description, quality, weight, img_observe, img_reverse, category_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?) []`)
// })

app.post("/admin/api/add", (req, res) => {
    const {
        name,
        face_value,
        year,
        price,
        country,
        compisition,
        short_description,
        full_description,
        quality,
        weight,
        img_obverse,
        img_reverse,
        category_id,
    } = req.body;

    // SQL query with placeholders
    const query = `INSERT INTO coins 
      (name, face_value, year, price, country, compisition, short_description, full_description, quality, weight, img_obverse, img_reverse, category_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // Values to be inserted
    const values = [
        name,
        face_value,
        year,
        price,
        country,
        compisition,
        short_description,
        full_description,
        quality,
        weight,
        img_obverse,
        img_reverse,
        category_id,
    ];

    // Execute the query
    connection.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to add coin to the database" });
        }

        // Success response
        res.status(200).json({ message: "Coin added successfully!", result });
    });
});


app.listen(3000, () => {
    console.log("Server created successfully");
})