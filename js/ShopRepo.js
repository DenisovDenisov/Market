
function Repository() {
    this._repo  = new InMemoryStorage();
};


Repository.prototype.create = function (Obj,data) {
    var newobj = objMaker.factory(Obj,data);
    return newobj;
}



