const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {

    function capitalizar(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    let nombre = capitalizar(req.params.name);
    res.send(`<h1>Hola ${nombre}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));


/* 

function capitalizar(string) 
        {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        res.send(` <p>${i} Soy Par!</p>`);

*/