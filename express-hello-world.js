"use strict";

const express = require('express');
const app = express();

let date = new Date();
let isoDate = date.toISOString();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
	res.send(isoDate);
});

app.listen(3000);