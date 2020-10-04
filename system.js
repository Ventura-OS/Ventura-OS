const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
  console.log(`OS listening at http://${hostname}:${port}`)
})

app.use(express.static('public'))

app.get('/', function(req, res){
    app.use(express.static('public'))
    res.sendFile('index.html', { root: __dirname });
  });
app.get('*', function(req, res){
    app.use(express.static('public'))
    res.sendFile('public/error.html', { root: __dirname });
  });