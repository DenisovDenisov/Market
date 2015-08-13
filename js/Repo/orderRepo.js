function Order () {
 Repository.apply(this,arguments);
}

Order.prototype = Object.create(Repository.prototype);
Order.prototype.constructor = Order;

// sOrder.prototype. = function(data) {

// };

var orders = new Order();