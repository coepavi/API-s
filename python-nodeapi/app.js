
var express = require('express')
var app = express()

var body = require('body-parser')

app.get('/getdata', function(req, res){
	console.log("Python did hit")
	res.send("Hello Python")
})

app.listen(8000)
