function Shop (data) {
  this.data = data;
}

Shop.create = function(data) {
    var shop = new Shop(data);
    ShopRepo.save(shop);
    return shop;
}

