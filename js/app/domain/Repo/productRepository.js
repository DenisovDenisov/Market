function ProductRepo (){
  this.storage = new InMemoryStorage();
}

extend(ProductRepo , Repository);


var prodRepo = new ProductRepo;