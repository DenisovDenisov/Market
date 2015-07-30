function Shop() {
  this.name;
}

Shop.createFromData = function(userData) {
  var shop = new Shop;
  shop.name = userData.name;
  shop.type = userData.type;
  (function() {
    InMemoryStorage.shops.push(shop);
  }());
  return shop;
}



Shop.get = function(index) {
  var i = index - 1;
  return InMemoryStorage.shops[i];
}

Shop.getByName = function (str) {
  for (var i = InMemoryStorage.shops.length - 1; i >= 0; i--) {
    console.log(InMemoryStorage.shops[i]);
  };
}

// Использование


// var guest = User.createAnonymous();
// guest.sayHi(); // Аноним

// var knownUser = User.createFromData({
//   name: 'Вася',
//   age: 25
// });
// knownUser.sayHi();

