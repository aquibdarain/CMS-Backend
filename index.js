const express = require('express');
const app = express();
require("dotenv").config();

PORT = process.env.PORT;
const cors = require('cors');

database = require('./config/db.connection');

app.use(cors('*'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var bodyParser = require('body-parser')

const userRoute = require('./controller/user.controller');


app.listen(PORT, () => {
    console.log(`the server is running on ${PORT}`)
})


app.use('/user', userRoute);