var express = require("express")
var app = express();

const csv = require('csv-parser');
const fs = require('fs');
var request = require("request");
var body = require("body-parser")

app.use(body.urlencoded({extended:true}))
app.use(body.json());

var args = [];

fs.createReadStream('Book.csv')
  .pipe(csv())
  .on('data', (row) => {
        console.log("row:", row)
        args.push(row)
  })
  .on('end', () => {
request.post({
    headers: {'content-type': 'application/json'},
    url: 'http://13.234.37.156:8000/getfile',
    form: args
}, function(error, response, body){
  console.log(body)

});
})
