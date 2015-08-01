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
});



// describe("Create", function() {
//   it ("must be defined" , function() {
//     var storage = new InMemoryStorage();
//     expect(storage.create({name : 'magaz'})).toBeDefined();
//   });

// });

// describe("", function() {
//   it ("must be defined" , function() {
//     var storage = new InMemoryStorage();
//     expect(storage.create({name : 'magaz'})).toBeDefined();
//   });

// });

// describe("Create", function() {
//   it ("must be defined" , function() {
//     var storage = new InMemoryStorage();
//     expect(storage.create({name : 'magaz'})).toBeDefined();
//   });

// });

// describe("Create", function() {
//   it ("must be defined" , function() {
//     var storage = new InMemoryStorage();
//     expect(storage.create({name : 'magaz'})).toBeDefined();
//   });

// });