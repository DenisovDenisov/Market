function Product (data) {
  this.data = data;
}

Product.create = function(data) {
    var product = new Product(data);
    prodRepo.save(product);
    return product;
}