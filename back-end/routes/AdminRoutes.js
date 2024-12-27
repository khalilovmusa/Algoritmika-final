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

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query('SELECT username, password FROM user WHERE username=?',[username], (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const adminPassword = result[0].password;

        bcrypt.compare(password, adminPassword, (err, isMatching) => {
            if(err){
                console.log(`An error ocurred while matching passwords` + err);
                return;
            }
            if(isMatching){
                res.json({isAuth: true, redirectUrl: "http://localhost:5173/admin"});
            }else{
                res.json({isAuth: false});
            }
        })
    })
});

// router.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     connection.query('SELECT username, password FROM user WHERE username=?', [username], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).json({ isAuth: false, error: "Database query error" });
//             return;
//         }

//         if (result.length === 0) {
//             res.json({ isAuth: false });
//             return;
//         }

//         const adminPassword = result[0].password;

//         bcrypt.compare(password, adminPassword, (err, isMatching) => {
//             if (err) {
//                 console.log(`An error occurred while matching passwords: ${err}`);
//                 res.status(500).json({ isAuth: false, error: "Password comparison error" });
//                 return;
//             }
//             if (isMatching) {
//                 res.json({ isAuth: true, user: { username } });
//             } else {
//                 res.json({ isAuth: false });
//             }
//         });
//     });
// });



router.get('/dashboard', (req, res) => {
    connection.query('SELECT * FROM coins', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        res.json(result);
    })
})


router.post("/add", (req, res) => {
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

    const query = `INSERT INTO coins 
      (name, face_value, year, price, country, compisition, short_description, full_description, quality, weight, img_obverse, img_reverse, category_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

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

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to add coin to the database" });
        }

        res.status(200).json({ message: "Coin added successfully!", result });
    });
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`DELETE FROM coins WHERE coins_id=?`,[id],(err, result) => {
        if(err){
            console.log("Can not delete this item: " + err);
            return;
        }
            res.status(200).json({ deleteMessage: "Coin deleted sucsessfully!" });
    })
})

router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
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
        category_id
    } = req.body;

    const query = `
        UPDATE coins 
        SET 
            name = ?, 
            face_value = ?, 
            year = ?, 
            price = ?, 
            country = ?, 
            compisition = ?, 
            short_description = ?, 
            full_description = ?, 
            quality = ?, 
            weight = ?, 
            img_obverse = ?, 
            img_reverse = ?, 
            category_id = ?
        WHERE coins_id = ?
    `;

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
        id
    ];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error("Error updating coin:", error);
            res.status(500).send("Failed to update the coin.");
        } else {
            res.status(200).send({message: "Coin updated successfully."});
        }
    });
});


module.exports = router;