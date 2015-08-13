function objMaker () {}


objMaker.factory = function (type, data){
    var constr = type;
    objMaker[constr].prototype = new objMaker();
    return new objMaker[constr](data);
};


objMaker.Shop = function (data) {
    this._name = data.name;
    this._owner = data.owner;
    this._city = data.city;
    this._shopId = data.shopId;
};
objMaker.Product = function(data) {
    this._name = data.name;
    this._owner = data.owner;
    this._amount = data.amount;
    this._price = data.price;
};
objMaker.Customer = function(data) {
    this._name = data.name;
    this._age = data.age;
    this._moneyAmount = data.money;
}

objMaker.Order = function(data) {
    this._customerId = data.shopId;
    this._productId = data.prodId;
    this._count = data.count;
    this._buy = false;
}

