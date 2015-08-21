function customerRepo (){
  this.storage = new InMemoryStorage();
}

extend(customerRepo , Repository);


var ClientRepo = new customerRepo;