var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as ID " + connection.threadId);
    console.log("--**Welcome to Bamazon!!**--");
});

function displayTable() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        shop();
    });
};

function shop() {
    connection.query("SELECT * FROM products", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "item",
                    type: "input",
                    message: "What item number would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "amount",
                    type: "input",
                    message: "how many units would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }]).then(function (answer) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].item_id == answer.item) {
                            var chosenItem = results[i];
                        }
                    }
                    if (chosenItem.stock_quantity >= parseInt(answer.amount)) {
                        connection.query(
                            "UPDATE products SET ? WHERE ? ",
                            [
                                {
                                    stock_quantity: chosenItem.stock_quantity - answer.amount
                                },
                                {
                                    item_id: chosenItem.item_id
                                }
                            ],
                            function (error) {
                                if (error) throw error;
                                console.log("Your total cost is " + (chosenItem.price * answer.amount) + ". Your order has been placed and will arrive in 5-7 days. Thank you for shopping with Bamazon!\n");
                                start();
                            });
                    } else {
                        console.log("We're sorry, we only have " + chosenItem.stock_quantity + " in stock. Please try again.\n")
                        start();
                    }
                })
    });
};

function start() {
    displayTable();
};

start();