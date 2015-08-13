function objMaker () {}


objMaker.factory = function (data){
    objMaker.Product.prototype = new objMaker();
    return new objMaker.Product(data);
};


objMaker.Product = function (data) {
    this._name = data.name;
    this._owner = data.owner;
    this._city = data.city;
    this._shopId = data.shopId;
};
