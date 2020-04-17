const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { 
  useNewUrlParser: true 
});

mongoose.connection.on("error", function(e) { 
  console.error(e); 
});

const VisitorSchema = mongoose.Schema({
  name: String,
  date: {type: Date, default: Date.now},
});

const Visitor = mongoose.model("Visitor",VisitorSchema);

app.get('/', (req, res) => {

    let name = req.query.name;
    
   
    

    if (!name) {
      name = 'Anónimo';
      
      const person = new Visitor({
        name,
      });

      person.save((error)=>{
        if (error) {
          return res.send('Error: ', error);
        }
  
        return res.send('<h1>El visitante fue almacenado con exito.</h1>')
  
      });
    }else{

      const person = new Visitor({
        name,
      });
  
      person.save((error)=>{
        if (error) {
          return res.send('Error: ', error);
        }
  
        return res.send('<h1>El visitante fue almacenado con exito.</h1>')
  
      });
    }

   

    
});

app.listen(3000, () => console.log('Listening on port 3000!'));


/* 

function capitalizar(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        

*/