var express = require("express")
var app = express()
var body = require("body-parser")
app.use(body.urlencoded({extended:true}))
app.use(body.json());

app.post('/getfile', function(req, res){
    console.log("Data received: ", req.body)
})

