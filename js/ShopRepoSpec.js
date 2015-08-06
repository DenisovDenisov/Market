describe("Repository", function() {
  it("Значение не должно быть Undefined", function() {
    var shop = new Repository();
    expect(shop).toBeDefined();
    expect(shop._repo).toBeDefined();
  });
  it("Create должна возвращать новый обьект", function() {
    var shop = new Repository();
    shop.create({name : 'FFF'});
    console.log(shop);
  })
});

