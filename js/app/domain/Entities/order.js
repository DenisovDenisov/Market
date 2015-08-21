function Order (data) {
  this.data = data;
}

extend(Order , Entity);

Order.create = function(data) {
    var order = new Order(data);
    return order;
}