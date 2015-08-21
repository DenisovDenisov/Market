function Product (data) {
  this.data = data;
}

extend(Product , Entity);

Product.create = function(data) {
    var product = new Product(data);
    return product;
}