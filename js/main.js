var InMemoryStorage = {
shops: [],
products:[],
clients:[]
}

//----------

 var shop1 = Shop.createFromData({
    name: "shop21",
    type:'sjsjsjs'
});

 var shop2 = Shop.createFromData({
    name: "shop22",
    type: 'sss'
});

 var client1 = Client.createFromData({
    name: 'Dick',
    money: 200
 });



console.log(Shop.get(1));
// shop = Shop.get(1);
// shop2 = Shop.getByName("shop21");

// product = Product.create();
// shop.products « product;

// shop.products.create({title: "123"});
// shop.addProduct({title:})

// ShopService.addProduct(shop, product)

// Market.GetAllProducts()