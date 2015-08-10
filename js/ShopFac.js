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
};
objMaker.Product = function(data) {
    this._name = data.name;
    this._owner = data.owner;
    this._amount = data.amount;
    this._price = data.price;
    this._shop = data.shop;
};
objMaker.Customer = function() {

}



