function Customer (data) {
  this.data = data;
}

Customer.create = function(data) {
    var сustomers = new Customers(data);
    CustomerRepo.save(customers);
    return сustomers;
}