const express = require('express');
const bodyParser = require('body-parser');

var cors =require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors())

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/AutomobilesLanka');

//Routes
app.use('/', require('./routes/app'));


app.listen(3000);