
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
console.log('Server start...');

app.get('/', (req, res) => {
    console.log('Request received.');
    fs.readFile('./index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
});

app.use('/static', express.static(path.join(__dirname, './static')));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
