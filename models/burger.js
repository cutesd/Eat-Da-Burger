/*
In models, make a burger.js file.
Inside burger.js, import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
*/
var orm = require("../config/orm.js");

var burger = {
    // tableName:STRING, cb:FUNCTION
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // tableName:STRING, cols:ARRAY, vals:ARRAY, cb:FUNCTION
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // tableName:STRING, objColVals:OBJECT, condition:STRING, cb:FUNCTION
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        })
    }
};

// 
module.exports = burger;
