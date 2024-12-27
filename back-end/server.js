const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const api = require('./routes/ApiRoutes');
const adminApi = require('./routes/AdminRoutes');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'coins'
});

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the db" + err.stack)
    }
    console.log("Connected to the database");
});

app.use('/api', api)
app.use('/api/admin', adminApi)



app.listen(3000, () => {
    console.log("Server created successfully");
})