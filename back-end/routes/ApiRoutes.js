const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'coins'
});

router.get('/', (req, res) => {
    connection.query('SELECT * FROM categories', (error, results) => {
        if (error) {
            console.log("An error ocurred while getting coin data" + error)
        }
        res.send(results);
    })
})

router.get('/category/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM coins WHERE category_id=${id}`, (err, result) => {
        if (err) {
            console.log(err,"category error");
            return;
        }
         res.send(JSON.stringify(result));
    })
});

router.get('/coin-details/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM coins WHERE coins_id = ?', [id], (err, result) => {
        if (err) {
            console.error("Error", err);
            res.status(500).json({ error: "Database query error" });
            return;
        }
        res.status(200).json(result);
    });
});

router.get('/advanced-filter', (req, res) => {
    connection.query('SELECT * FROM coins', (err, result) => {
        if(err){
            console.log("can not fetch the coins", err);
            return;
        }
        res.json(result);
    })
})

module.exports = router;