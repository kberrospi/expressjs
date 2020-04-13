const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {

        res.send('<h1>Hola ' + req.param.name  + '!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));