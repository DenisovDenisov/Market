describe("InMemoryStorage", function() {
    var storage;
    var data;
    var returned_data;
    beforeEach(function() {
      storage = new InMemoryStorage();
      data = {
        name : 'NewShop' , City : 'Kazan'
      };
      returned_data = storage.create(data);

    });

    describe("initialization", function() {
        it("must be defined", function() {

            expect(storage).toBeDefined();
            expect(storage._storage).toBeDefined();

        });
        it("must be an object", function() {
            expect(storage.constructor).toBe(InMemoryStorage);
        });
    });
    describe("setId", function() {
        it("should return id", function() {
            expect(storage.setId()).toBe(2);
        });
        it("should separate ids for different storages", function() {
            var storage1 = new InMemoryStorage();
            var storage2 = new InMemoryStorage();
            expect(storage1.setId()).toBe(1);
            expect(storage2.setId()).toBe(1);
        });
    });
    describe("create", function() {
        it("should return created object with id", function() {
            expect(returned_data.id).toBeDefined();
            expect(data.id).toBeDefined();
            expect(storage.get(data.id)).toEqual(data);
        });
    });
    describe("Delete", function() {
        it("Удалит обьект по указанному id", function() {
            // console.log(storage.get(data.id));
            storage.delete(data.id);
            // console.log(storage.get(data.id));
            expect(storage.get(data.id)).toBeUndefined();
        });
    });
});
