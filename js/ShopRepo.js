
function Repository() {
    this._repo = new InMemoryStorage();
};

Repository.prototype.create = function (data) {
    var factory = new objFactory(data);
    var obj = factory.makeSimpleObj();
    return obj;
}
// ShopRepository.prototype.shopSave = function (shop){
//     var id = this._shops.addData(shop);
//     shop._id = id;
//     return shop;
// }

// ShopRepository.prototype.shopGetById = function (id){
//     return this._shops.getData(id);
// }

// ShopRepository.prototype.shopUpdate = function (id, data){
//     return this._shops.updateData(id);
// }

// ShopRepository.prototype.shopDelete = function (id){

//     return this._shops.deleteDataFantomly(id);
// }

// ShopRepository.prototype.shopDestroy = function (id){
//     return this._shops.deleteData(id);
// }
