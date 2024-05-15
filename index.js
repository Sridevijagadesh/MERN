const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express()
let port = process.env.port||8081;

app.set('views', path.join(__dirname));
app.set('view engine' , 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.render('home')
})
app.post("/saveData",function(req,res){
  console.log('your name:', req.body.name)
  console.log('your email:', req.body.email)
  console.log('your Adresss:', req.body.Address)
console.log('your Number:', req.body.Number)
})



app.listen(port)
console.log('hello')