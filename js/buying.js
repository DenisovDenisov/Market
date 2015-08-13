function buying (order,clientId) {
    var count = order.count;
    var shop = Shops.get(order.shopId);
    var prod = Products.get(order.prodId);
    var clientMoney = Clients.get(clientId).moneyAmount;




}