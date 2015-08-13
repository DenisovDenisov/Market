function Shop () {
 Repository.apply(this,arguments);
}

Shop.prototype = Object.create(Repository.prototype);
Shop.prototype.constructor = Shop;

Shop.prototype.addProduct = function(data) {

};

var Shops = new Shop();