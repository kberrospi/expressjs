const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { 
  useNewUrlParser: true, useUnifiedTopology: true  
});

mongoose.connection.on("error", function(e) { 
  console.error(e); 
});

const VisitorSchema = mongoose.Schema({
  name: String,
  count: Number,
});

const Visitor = mongoose.model("Visitor",VisitorSchema);

app.get('/', (req, res) => {

    const name = req.query.name;
    let cont = 1;

       Visitor.updateMany({name: name},  {$inc :{count: 1 }}, async function  (err, raw){
        if(err) {
          return res.send("Error: " + err);
        }else if(raw.n === 0){
          await Visitor.create({name: name || "Anónimo", count: 1})
        }

          Visitor.find(function(err, data){
            if(err) return res.send("Error" + err);
              let row ="";
              data.forEach((e)=>{
                row+= '<tr><td>' + e._id + '</td>' +
                      '<td>' + e.name + '</td>' +
                      '<td>' + e.count + '</td></tr>';
            });
      
            let result = '<table><thead><tr>'+
                        '<th> Id </th>' +
                        '<th> Name </th>' +
                        '<th> Visits </th>' +
                        '</tr></thead><tbody>' + row + '</tbody></table>';
      
            return res.send(result);
          });
    
    });

});

app.listen(3000, () => console.log('Listening on port 3000!'));