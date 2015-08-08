function InMemoryStorage () {
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

InMemoryStorage.prototype.createImmutable = function(data) {
    var id = this.setId();
    var new_data = data;
    new_data.id = id;
    return this._storage[id] = new_data;
};

InMemoryStorage.prototype.get = function(arg) {
    return this._storage[arg];

};

InMemoryStorage.prototype.update = function(id, data) {
    return this._storage[id] = data;
};


InMemoryStorage.prototype.delete = function(id) {
    var data = this._storage[id];
    delete this._storage[id];
    return data;
}


