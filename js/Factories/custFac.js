function objMaker () {}


objMaker.factory = function (data){
    objMaker.Customer.prototype = new objMaker();
    return new objMaker.Customer(data);
};


objMaker.Customer = function (data) {
    this._name = data.name;
    this._age = data.age;
    this._moneyAmount = data.money;
};
