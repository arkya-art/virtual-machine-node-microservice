const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
     res.send('Hello from Microservice on VM1');
});


app.listen(port, () => {
     console.log('Microservice running on http://0.0.0.0:3000');
});
