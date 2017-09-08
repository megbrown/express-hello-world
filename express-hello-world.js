"use strict";

const express = require('express');
const app = express();
require('dotenv').config();

let date = new Date();
let isoDate = date.toISOString();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
	res.send(isoDate);
});

let port = process.env.PORT || 1337
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});