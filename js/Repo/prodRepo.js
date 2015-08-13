function Product () {
 Repository.apply(this,arguments);
}

Product.prototype = Object.create(Repository.prototype);
Product.prototype.constructor = Shop;

Product.prototype.addOwner = function(data) {

};

var Products = new Product();