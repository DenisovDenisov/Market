
function Repository() {
    this._repo  = new InMemoryStorage();
};


Repository.prototype.create = function (data) {
    var newobj = objMaker.factory(data);
    var newobjId = this._repo.create(newobj);
    return newobjId;
}

Repository.prototype.get = function(id) {
    var obj = this._repo.get(id);
    return obj;
};

Repository.prototype.Delete = function(id) {
    var deletedObj = this._repo.delete(id);
    return deletedObj;
};

Repository.prototype.update = function(id,data) {
    return this._repo.update(id,data);
};



