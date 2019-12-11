
var express = require('express')
var app = express()
var body = require('body-parser')
app.use(body.urlencoded({extended:true}))
app.use(body.json());

app.get('/getdata', function(req, res){
	console.log("Python did hit")
	res.send("Hello Python")
})

app.get('/postdata', function(req, res){
	console.log(req.query)
	var a = req.query
	console.log(a.address)
//	res.send(a.address)
	res.send("You sent data :" + a.address)
})


app.listen(8000)
