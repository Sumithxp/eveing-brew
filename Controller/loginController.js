var express = require('express');
var router = express.Router();

var loging = [
    { user: 'admin', password: 'admin', role: 'admin' },
    { user: 'saman', password: 'pass', role: 'user' },
];


var routes = function () {
    router.route('/')
        .get(function (req, res) {
            res.json("app is up");

        });

    router.route('/')
        .post(function (req, res) {
            //var id = products.length + 1;
            // products.push({ ProductId: id, ProductName: '"' + req.body.ProductName + "'", ProductPrice: req.body.ProductPrice })
            var user = req.body.user;
            var pass = req.body.password;

            //    console.log(req);
            console.log(req.body);



            //  var result;
            // loging.map(function (x) {
            //     if (x.user === user && x.password === pass) {
            //         console.log(true);
            //         result = true;
            //     } else {
            //         console.log(false);
            //         result = false;
            //     }
            // })

            // console.log(result);
            var found = loging.find(x => x.user === user && x.password === pass);
            //    console.log(found !==)

            res.json(found !== undefined ? found.user : null);
        });
    return router;
};

module.exports = routes;