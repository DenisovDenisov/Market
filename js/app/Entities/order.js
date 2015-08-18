function Order (data) {
  this.data = data;
}

Order.create = function(data) {
    var order = new Order(data);
    OrderRepo.save(order);
    return order;
}