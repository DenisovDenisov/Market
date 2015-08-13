function Customer () {
 Repository.apply(this,arguments);
}

Customer.prototype = Object.create(Repository.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.addToOrder = function(data) {

};

Customer.prototype.purchase = function(data) {

};

Customer.prototype.getOrders = function(data) {

};

var Customers = new Customer();