/*
Inside the burgers_controller.js file, import the following:

Express
burger.js

Create the router for the app, and export the router at the end of your file.
*/

var express = require("express");

var router = express.Router();

// 
var burger = require("../models/burger.js");

// SHOW
router.get("/", function (req, res) {
    burger.selectAll((data) => {
        console.log(data);
        res.render("index", { burgers: data });
    });
    //   burger.all(function (data) {
    //     var hbsObject = {
    //       burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    //   });
});

// CREATE
router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], (res) => {
        res.json({ id: result.insertId });
    })
})

// router.post("/api/burgers", function (req, res) {
//     burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function (result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

// UPDATE
router.put("/api/burgers/:id", (req, res) => {
    var cond = "id = " + req.params.id;
    console.log("cond:", cond);

    burger.updateOne({ devoured: req.body.devoured }, cond, (result) => {
        if (result.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete("/api/burgers/:id", (req, res) => {
//     console.log("ROUTE DELETE", req.params.id);
//     burger.delete(req.params.id, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


module.exports = router;
