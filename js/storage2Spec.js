describe("InMemoryStorage", function() {
  it("must be defined", function() {
    var storage = new InMemoryStorage();
    expect(storage).toBeDefined();
    expect(storage._storage).toBeDefined();
  });

  it("must be an object", function() {
    var storage = new InMemoryStorage();
    console.log(storage.constructor);
    expect(storage.constructor).toBe(InMemoryStorage);
  });

  describe("setId", function() {
    it("should return id", function() {
      var storage = new InMemoryStorage();
      expect(storage.setId()).toBe(1);
    });

    xit("should separate ids for different storages", function() {
      var storage1 = new InMemoryStorage();
      var storage2 = new InMemoryStorage();
      expect(storage1.setId()).toBe(1);
      expect(storage2.setId()).toBe(1);
    });
  });

  describe("create", function() {
    it("должен создать новый экземпляр в хранилище", function() {
      var storage = new InMemoryStorage();
      storage.create({name : 'shop1' , city : 'Kazan'});
      console.log(storage);
      expect(storage).toBeDefined();
    });

    it("should return created object with id", function() {
      var storage = new InMemoryStorage();
      storage.create({name : 'FFF' , city : 'Kazan'});
      console.log(storage.get(3));
    });
  });
});




describe("Update", function() {
  it ("Вернет обьект с новыми свойствами" , function() {
    var storage = new InMemoryStorage();
    storage.create({name : 'm'});
    storage.update(4 , {city : 'Kazan'});
    console.log(storage.get(4));
  });
});




describe("Delete", function() {
  it ("Удалит обьект по указанному id" , function() {
    var storage = new InMemoryStorage();
    storage.create({name : 'mag'});
    console.log(storage.get(5));
    storage.delete(5);
    console.log(storage.get(5));
    expect(storage.get(5)).toBeUndefined();
  });
 });

