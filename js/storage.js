var InMemoryStorage = {

    storage: {},

    setId : (function() {
        var a = 1;
        return function () {
            return a++;
        };
    })(),

    create : function (data) {
        data.id = this.setId();
        return this.storage[data.id] = data;

    },

    get: function (id) {
        return this.storage[id];
    },

    delete : function (id) {
        var data = this.storage[id];
        delete this.storage[id];
        return data;
    },

    update : function (id,data) {
        return this.storage[id] = data;
    }
}


InMemoryStorage.create({name: 'Dick' });
InMemoryStorage.create({name: 'John'});
InMemoryStorage.create({name: 'Ivan'});
InMemoryStorage.create({name: 'Petya'});
InMemoryStorage.create({name: 'Anton'});

InMemoryStorage.delete(2);
console.log(InMemoryStorage.storage);