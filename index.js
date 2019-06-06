var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var productController = require('./Controller/ProductController')();
app.use("/api/products", productController);

var appointmentController = require('./Controller/AppointmentController')();
app.use("/api/appointments", appointmentController);


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
