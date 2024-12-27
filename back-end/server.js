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

// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM coins.categories', (error, results) => {
//         res.send(results);
//     })
// })

// app.get('/category/:id', (req, res) => {
//     const id = req.body.id;
//     console.log("res id", id)
//     connection.query(`SELECT * FROM coins WHERE category_id=${id}` , (err, result) => {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         res.send(JSON.stringify(result));
//     })
// })

// app.post("/admin/api/add", (req, res) => {
//     const {
//         name,
//         face_value,
//         year,
//         price,
//         country,
//         compisition,
//         short_description,
//         full_description,
//         quality,
//         weight,
//         img_obverse,
//         img_reverse,
//         category_id,
//     } = req.body;

//     const query = `INSERT INTO coins 
//       (name, face_value, year, price, country, compisition, short_description, full_description, quality, weight, img_obverse, img_reverse, category_id) 
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//     const values = [
//         name,
//         face_value,
//         year,
//         price,
//         country,
//         compisition,
//         short_description,
//         full_description,
//         quality,
//         weight,
//         img_obverse,
//         img_reverse,
//         category_id,
//     ];

//     connection.query(query, values, (err, result) => {
//         if (err) {
//             console.error("Error inserting data:", err);
//             return res.status(500).json({ error: "Failed to add coin to the database" });
//         }

//         res.status(200).json({ message: "Coin added successfully!", result });
//     });
// });


app.listen(3000, () => {
    console.log("Server created successfully");
})