function Shop (data) {
  this.data = data;
}

extend(Shop , Entity);

Shop.create = function(data) {
    var shop = new Shop(data);
    return shop;
}

