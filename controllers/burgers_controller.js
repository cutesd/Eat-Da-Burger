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
        res.render("index", { burgers: data });
    });
});

// CREATE
router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    })
})

// UPDATE
router.put("/api/burgers/:id", (req, res) => {
    var cond = "id = " + req.params.id;

    burger.updateOne({ devoured: req.body.devoured }, cond, (result) => {
        if (result.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});


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
