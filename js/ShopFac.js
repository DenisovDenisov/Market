function objMaker () {}


objMaker.factory = function (type, data){
    var constr = type;
    objMaker[constr].prototype = new objMaker();
    return new objMaker[constr](data);
};


objMaker.Shop = function (data) {
    this._name = data.name;
    this._owner = data.owner;
};




