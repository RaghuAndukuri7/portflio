const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(function(req, res) {
    res.status(400);
    return res.send(`404 Error: Resource not found`);
  });

app.listen(port, () => {
  console.log(`App listening  on port 3000`);
})