const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {

    let html = '<form action="/" method="POST">'+
    '<div>'+ '<input type="text" id="cnombre" name="nombre">'+ '<button type="submit">Enviar</button>'+ '</div>'+
    '</form>';
			  
    res.send(html);
   
});

app.post('/', function(req, res){
    let name = req.body.nombre;
    let html = '<h1>Hola ' + name + '!</h1>';
               
    res.send(html);
  });


app.listen(3000, () => console.log('Listening on port 3000!'));


/* 

function capitalizar(string) 
        {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        res.send(` <p>${i} Soy Par!</p>`);

*/