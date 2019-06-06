var express = require('express');
var router = express.Router();
//var sql = require('mssql');
//var conn = require("../connection/connect")();
var Appointments = [
    { AppointmentId: 1, name: 'Saman', timeInterval: '9-9.30', startTime: '9:00', status: 1, image: '', forMe: 1 },
    { AppointmentId: 2, name: 'Saman', timeInterval: '19-19.30', startTime: '19:00', status: 1, image: '', forMe: 1 },
    { AppointmentId: 3, name: 'Peter', timeInterval: '17-17.30', startTime: '17:00', status: 1, image: '', forMe: 1 },
    { AppointmentId: 4, name: 'Sam', timeInterval: '9-9.30', startTime: '9:00', status: 1, image: '', forMe: 1 },
    { AppointmentId: 5, name: 'Peter', timeInterval: '9-9.30', startTime: '9:00', status: 1, image: '', forMe: 1 }
]

var routes = function () {
    router.route('/')
        .get(function (req, res) {
            res.json(Appointments);
            // conn.connect().then(function()
            // {
            //     var sqlQuery = "select * from Appointments";
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
            // conn.connect().then(function () {
            //     var transaction = new sql.Transaction(conn);
            //     transaction.begin().then(function () {
            //         var request = new sql.Request(transaction);

            //         request.query("INSERT INTO Appointments ([name], [no], [timeInterval], [startTime], [status], [image], [forMe]) VALUES " +
            //             //"('Sam2', 1, '9 - 9.30', '1900-01-01 09:00:00.000',1,'image path', 1 );").then(function () {
            //             //"('" + request.body.name + "', 1, '9 - 9.30', '1900-01-01 09:00:00.000',1,'image path', 1 );").then(function () {
            //             "('" + req.body.name + "', " + req.body.no + ", '" + req.body.timeInterval + "', '" + req.body.startTime + "'," + req.body.status + ",'" + req.body.image + "', " + req.body.forMe + " );").then(function () {
            //                 transaction.commit().then(function (recordSet) {
            //                     conn.close();
            //                     //res.status(200).send(req.body);
            //                     res.status(200).send("Success:");
            //                 }).catch(function (err) {
            //                     conn.close();
            //                     res.status(400).send("Error while inserting data q" + err);
            //                 });
            //             }).catch(function (err) {
            //                 conn.close();
            //                 res.status(400).send("Error while inserting data w" + err);
            //             });
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