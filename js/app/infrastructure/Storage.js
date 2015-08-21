

var InMemoryStorage = function  () {
    this._storage = {};
    this.setId = InMemoryStorage.prototype.setId();
}

InMemoryStorage.prototype.setId = function() {
    var currentId = 1;
    return function () {
        return currentId++;
    };
};

InMemoryStorage.prototype.create = function(data) {
    data.id = this.setId();
    return this._storage[data.id] = data;
};

InMemoryStorage.prototype.get = function(id) {
    return this._storage[id];

};

InMemoryStorage.prototype.getAll = function() {
    var allObjects = [];

    for (item in this._storage) {
        allObjects.push(this._storage[item]);
    };

    return allObjects;
}
InMemoryStorage.prototype.update = function(id, data) {
    return this._storage[id] = data;
};


InMemoryStorage.prototype.delete = function(id) {
    var data = this._storage[id];
    delete this._storage[id];
    return data;
}


