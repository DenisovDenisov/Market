function orderRepo (){
  this.storage = new InMemoryStorage();
}

extend(orderRepo , Repository);


var OrderRepo = new orderRepo;