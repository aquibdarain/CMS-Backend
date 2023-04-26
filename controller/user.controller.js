require('dotenv').config();
const express = require('express');
const connection = require('../config/db.connection');
let router = express.Router();


// add user api
router.post('/add', (req, res) => {
    let user = req.body;
    var query1 = "insert into user (name,contactNumber,email,dob,github,linkedin,instagram,twitter,aadhar,occupation,address) values(?,?,?,?,?,?,?,?,?,?,?);";
    connection.query(query1, [
        user.name,
        user.contactNumber,
        user.email,
        user.dob,
        user.github,
        user.linkedin,
        user.instagram,
        user.twitter,
        user.aadhar,
        user.occupation,
        user.address,
    ], (err, result) => {
        if (!err) {
            return res.status(200).json({ message: "User added added successfully" + result });
        }
        else {
            console.log("error-", err);
            return res.status(500).json(err)
        }
    })
})

// get all user api
router.get('/getAllData', (req, res) => {
    var query2 = "select * from user"
    connection.query(query2, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        }
        else {
            return res.status(500).json(err);
        }
    })
});

// update user api
router.put('/update/:id', (req, res) => {
    let id = req.params.id
    let user = req.body;
    var query5 = "update user set name=?,contactNumber=?,email=?,dob=?,github=?,linkedin=?,instagram=?,twitter=?,aadhar=?,occupation=?,address=? where id=" + id;
    connection.query(query5,
        [user.name,
        user.contactNumber,
        user.email,
        user.dob,
        user.github,
        user.linkedin,
        user.instagram,
        user.twitter,
        user.aadhar,
        user.occupation,
        user.address,
        ], (err, results) => {
            if (!err) {
                if (results.affectedRows == 0) {
                    return res.status(404).json({ message: "user id does not found" })
                }
                return res.status(200).json({ message: "user updated successfully" });
            }
            else {
                return res.status(500).json(err)
            }
        })
});


// delete user api
router.delete('/delete/:id', (req, res) => {
    // const id = req.params.id;
    var query6 = "delete from user where id=" + req.params.id;
    connection.query(query6, (err, result) => {
        if (!err) {
            if (result.affectedRows == 0) {
                return res.status(404).json({ message: "user id does not exits" })
            }
            return res.status(200).json({ message: "user deleted successfully" })
        }
        else {
            return res.status(500).json(err)
        }
    })
});

// get user by student id
router.get('/getById/:id', (req, res) => {
    let id = req.params.id
    var query = "select * from user where id=" + id;
    // connection.query(query, (err, result) => {
    //     if (err) throw err;
    //     res.send(result)
    // })
    connection.query(query, (err, result) => {
        if (!err) {
            return res.status(200).json({ msg: "success", result })
        }
        else {
            return res.status(500).json(err)
        }
    })
})

module.exports = router;