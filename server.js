var express = require("express")
var app = express();

var request = require("request");

var body = require("body-parser")

app.use(body.urlencoded({extended:true}))
app.use(body.json());

/*
request.get("http://13.233.151.2:8000/", (err, res, body) => {
    if(err) {
        throw err
    }
    var dap = (JSON.parse(body));
    console.log("body: ", dap)
})

*/


//POST request withut using html page


var data = '{ "request" : "msg", "data" : "Mango" }';
var json_obj = JSON.parse(data);
request.post({
    headers: {'content-type': 'application/json'},
    url: 'http://13.233.151.2:8000/myaction',
    form: json_obj
}, function(error, response, body){
  console.log(body)

});

