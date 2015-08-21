function Customer (data) {
  this.data = data;
}

extend(Customer , Entity);

Customer.create = function(data) {
    var сustomers = new Customers(data);
    return сustomers;
}