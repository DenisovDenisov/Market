function objMaker () {}


objMaker.factory = function (data){
    objMaker.Shop.prototype = new objMaker();
    return new objMaker.Shop(data);
};


objMaker.Shop = function (data) {
    this._name = data.name;
    this._owner = data.owner;
    this._city = data.city;
    this._shopId = data.shopId;
};
