/*global beforeEach, afterEach */
/*global describe, it, expect */
/*global window, eb, loadFixtures */



xdescribe("Repository" , function() {
  var data;
  var shop;
  var returnedData;
  beforeEach(function() {
    data = {name : 'FFF', owner : 'eeee'};
    shop = Shops.create('Shop' , data);
  })

xdescribe("Init" , function() {
  it("Must be defined" , function() {
    expect(Shops).toBeDefined();
    expect(Products).toBeDefined();
    expect(Customers).toBeDefined();
  })
    it("Must be an object" , function() {
    expect(Shops.constructor).toBe(Repository);
    expect(Products.constructor).toBe(Repository);
    expect(Customers.constructor).toBe(Repository);
  })
  })
xdescribe("Create" , function() {
  it("Should return new object with ID" , function() {
    expect(typeof shop.id).not.toBe('undefined');
  })
})
describe("Get" , function() {
  it("Should get object by ID" , function() {
    expect(Shops.get(shop.id)).toBeDefined();
  })
})
describe("Delete" , function() {
  it("Should delete object by ID" , function() {
    Shops.Delete(shop.id);
    expect(Shops.get(shop.id)).toBeUndefined();
  })
})
describe("Name" , function() {
  it("Should update object" , function() {
    var id = shop.id;
    Shops.update(id, {owner : 'OOOO'});
    expect(Shops.get(shop.id).owner).toBe('OOOO');
  })
})
})
