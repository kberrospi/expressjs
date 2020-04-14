const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let i ; let str ="";
    for (i=1; i<=50; i++) {

        if( (i%2) === 0){
           str+= "<p> " + i + " Soy Par!" + "</p>";
        }else{
            str+= "<p> " + i + " Soy Impar!" + "</p>";
        }
        
    }    
    
    res.send(str);
});

app.listen(3000, () => console.log('Listening on port 3000!'));


/* 

function capitalizar(string) 
        {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        res.send(` <p>${i} Soy Par!</p>`);

*/