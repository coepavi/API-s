var express = require('express')
var app = express()
var body = require('body-parser')

app.use(body.urlencoded({extended:true}))
app.use(body.json());

app.get('/data', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send("Take this advance")
        console.log("inside node")
})

app.listen(4000)
