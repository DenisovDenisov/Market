var Obj =
{
    Shop: function (param) {

    },
    Product: function (param) {

    },
    Customer: function (param) {

    }
}

function ObjFactory(name) {
    this.name = name;
}

ObjFactory.prototype = {
    constructor: ObjFactory,

    makeShop: function () {
        return new Obj.Shop({
            name: this.name
        });
    },
    makeCustomer: function (name) {
        return new Obj.Product({
            name: name
        });
    },
    makeProduct: function (name) {
        return new Obj.Customer({
            name: name
        });
    }
}

var shop1 = new ObjFactory('shop1');



console.log(Obj.Shop());
