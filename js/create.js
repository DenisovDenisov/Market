function Shop() {
  this.name;
}

function Client() {
  this.name;
}

function Product () {
  this.name;
}


Client.createFromData = function(clientData) {
  var client = new Client;
  client.name = clientData.name;
  client.moneyAmount = clientData.money; //Отдельный метод
  InMemoryStorage.clients.push(client);
  return client;
}


Shop.createFromData = function(shopData) {
  var shop = new Shop;
  shop.name = shopData.name;
  shop.type = shopData.type;
  InMemoryStorage.shops.push(shop);
  return shop;
}


Product.createFromData = function(productData) {
  var product = new Product;
  product.name = productData.name;
  product.price = productData.price;
  InMemoryStorage.products.push(product);
  return product;
}




