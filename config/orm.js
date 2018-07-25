/*
Create an orm.js file inside config directory.

Import (require) connection.js into orm.js

In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
selectAll()
insertOne()
updateOne()
Export the ORM object in module.exports.

*/

var connection = require("../config/connection.js");

// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") > -1) {
                value = '"' + value + '"';
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

//
var orm = {
    // tableName:STRING, cb:FUNCTION
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // tableName:STRING, cols:ARRAY, vals:ARRAY, cb:FUNCTION
    insertOne: function (tableName, cols, vals, cb) {
        var query = "INSERT INTO " + tableName;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // tableName:STRING, objColVals:OBJECT, condition:STRING, cb:FUNCTION
    updateOne: function (tableName, objColVals, condition, cb) {
        var query = "UPDATE " + tableName;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log(query);
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
    // tableName:STRING, id:INT, cb:FUNCTION
    //   delete: function (tableName, id, cb) {
    //     var query = "DELETE FROM " + tableName;
    //      query+= " WHERE id = " + id;
    //     connection.query(query, [id], function (err, result) {
    //       if (err) throw err;
    //       cb(result);
    //     });
    //   }
};

module.exports = orm;
