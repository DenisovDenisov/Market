function InMemoryStorage () {
    this._storage = {};
}

InMemoryStorage.prototype.setId = (function() {
    var a = 1;
    return function () {
        return a++;
    };
})();

InMemoryStorage.prototype.create = function(data) {
    data.id = this.setId();
    return this._storage[data.id] = data;

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



