var express = require("express")
var app = express();
var request = require("request");
var body = require("body-parser")

app.use(body.urlencoded({extended:true}))
app.use(body.json());

app.get('/', function(req, res){
  res.sendFile('./index.html', {root:__dirname})
})

app.get('/getfx', function(req, res){

var json_data ='&from=USD$to=INR&amount=1'
request.post({
    headers: {'content-type': 'application/json'},
    url: 'http://data.fixer.io/api/latest?access_key=38c01bab067ed29ff87b44b97d7a234c'
}, function(error, response, body){
  console.log(error)
console.log(typeof(body))
var fxdata = JSON.parse(body)
console.log("INR: ", fxdata.rates.INR)
        var a = fxdata.rates.USD
        var b = fxdata.rates.GBP
        var c = fxdata.rates.INR
        console.log(a)
        console.log(b)
        console.log(c)
res.send({a, b, c})
});
})


app.listen(4000);
