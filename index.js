var express = require('express')
var app = express()

const dbConfig = require('./Controller/config/database.config');
const mongoose = require('mongoose');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Auth Api Server')
})

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// var productController = require('./Controller/ProductController')();
// app.use("/api/products", productController);

// var appointmentController = require('./Controller/AppointmentController')();
// app.use("/api/appointments", appointmentController);

var loginController = require('./Controller/loginController')();
app.use("/api/login", loginController);



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });