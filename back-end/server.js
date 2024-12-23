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
    if(err) {
        console.error("Error connecting to the db" + err.stack)
    }
    console.log("Connected to the database");
});

app.get('/', (req,res) => {
    connection.query('SELECT * FROM coins.categories', (error, results) => {
        res.send(results);
    })
})

app.listen(3000, () => {
    console.log("Server created successfully");
})