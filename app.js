const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<div>HcUy6Re2LLBRtj</div>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));