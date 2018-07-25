//
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
