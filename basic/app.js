var express = require("express")
var app = express()

var body = require("body-parser")
app.use(body.urlencoded({ extended: true })); 

//calling html page index.html

app.get('/', function(req, res) {

	res.sendFile('./index.html', {root: __dirname}) 
}
)

//html page is loaded and user will input id and name. API will be posted

app.post('/myaction', function(req, res) {
          console.log("req: ", req.body)
	res.send(req.body)
//	console.log(req.body)

}
)


//server listining on port 8000

app.listen(8000);

