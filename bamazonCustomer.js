var inquirer = require("inquirer");
var mysql = require("mysql");
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
    begin();
});

function begin() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log("---*Welcome to Bamazon*---");
        console.log("Item # " + "|" + "   Product Name   " + "|" + "   Department   " + "|" + "   Price per Unit   " + "|" +" # in Stock ")
        for (let i = 0; i < results.length; i++) {
            console.log("   " + results[i].item_id + "   |   " + results[i].product_name + "  |   " + results[i].department_name + "  |  " + results[i].price + "  |   " + results[i].stock_quantity);
        };
    })
purchase();
};

function purchase(){
    inquirer
    .prompt([
        {
        name: "item",
        type: "input",
        message: "What item number would you like to purchase?",
        validate: function(value) {
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
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }]).then(function(answer){
            if (answer.item && answer.amount){
                return true;
                updateItems();
            }
            else 
            console.log("Please enter an item number to purchase.")
        })
    };

    function updateItems(){
        
    }


//6. The app should then prompt users with two messages.

//   * The first should ask them the ID of the product they would like to buy.
  // * The second message should ask how many units of the product they would like to buy.

//7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

  // * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

//8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
  // * This means updating the SQL database to reflect the remaining quantity.
   //* Once the update goes through, show the customer the total cost of their purchase.