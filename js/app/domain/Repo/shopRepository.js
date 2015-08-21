function shopRepo (){
  this.storage = new InMemoryStorage();
}

extend(shopRepo , Repository);


var ShopRepo = new shopRepo;