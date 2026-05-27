const express = require('express');

const app = express();

const password = "admin123";

app.get('/', (req, res) => {

    eval(req.query.code);

    res.send('DevSecOps Lab Running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});