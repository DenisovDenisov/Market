var InMemoryStorage = {
shops: [],
products:[{},{},{}]
}

//----------

 var shop1 = Shop.createFromData({
    name: "shop21"
});

 var shop2 = Shop.createFromData({
    name: "shop22"
});
console.log(shop1);


console.log(InMemoryStorage.shops);

console.log(Shop.get(1));

console.log(Shop.getByName());
// shop = Shop.get(1);
// shop2 = Shop.getByName("shop21");

// product = Product.create();
// shop.products « product;

// shop.products.create({title: "123"});
// shop.addProduct({title:})

// ShopService.addProduct(shop, product)

// Market.GetAllProducts()