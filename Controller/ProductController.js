var express = require('express');
var router = express.Router();
//var sql = require('mssql');
//var conn = require("../connection/connect")();

var products = [
    { ProductId: 1, ProductName: "Prod01", ProductPrice: 21.00 },
    { ProductId: 2, ProductName: "Prod02", ProductPrice: 44.00 },
    { ProductId: 3, ProductName: "Prod03", ProductPrice: 35.00 },
    { ProductId: 4, ProductName: "Prod04", ProductPrice: 56.00 },

]
var routes = function () {
    router.route('/')
        .get(function (req, res) {

            res.json(products);

            // conn.connect().then(function()
            // {
            //     var sqlQuery = "select * from Products";
            //     var req = new sql.Request(conn);
            //         req.query(sqlQuery).then(function (recordset)
            //         {
            //             res.json(recordset.recordset);
            //             conn.close();
            //         })
            //         .catch(function (err) {
            //             conn.close();
            //             res.status(400).send("Error while inserting data qq " + err);
            //         });
            // })
            //     .catch(function (err) {
            //         conn.close();
            //         res.status(400).send("Error while inserting data ee " + err);
            //     });
        });

    router.route('/')
        .post(function (req, res) {
            var id = products.length + 1;
            products.push({ ProductId: id, ProductName: '"' + req.body.ProductName + "'", ProductPrice: req.body.ProductPrice })

            // conn.connect().then(function () {
            //     var transaction = new sql.Transaction(conn);
            //     transaction.begin().then(function () {
            //         var request = new sql.Request(transaction);

            //         request.query("INSERT INTO Products (ProductName, ProductPrice) VALUES ('" + req.body.ProductName + "''" + req.body.ProductName + "', " + req.body.ProductPrice + ");").then(function () {
            //             transaction.commit().then(function (recordSet) {
            //                 conn.close();
            //                 res.status(200).send(req.body);
            //             }).catch(function (err) {
            //                 conn.close();
            //                 res.status(400).send("Error while inserting data q" + err);
            //             });
            //         }).catch(function (err) {
            //             conn.close();
            //             res.status(400).send("Error while inserting data w" + err);
            //         });
            //     }).catch(function (err) {
            //         conn.close();
            //         res.status(400).send("Error while inserting data e" + err);
            //     });
            // }).catch(function (err) {
            //     conn.close();
            //     res.status(400).send("Error while inserting data r" + err);
            // });
        });
    return router;
};
module.exports = routes;