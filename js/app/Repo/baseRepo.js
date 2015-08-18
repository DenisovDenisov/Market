
function Repository() {
  this.storage  = new InMemoryStorage();
};

Repository.prototype.save = function(entity) {
  var dataWithId = this.storage.create(entity.data);
  return entity.data = dataWithId;
};

Repository.prototype.get = function(id) {
  var obj;
  obj = this.storage.get(id);
  return obj;
};

Repository.prototype.Delete = function(id) {
  var deletedObj = this.storage.delete(id);
  return deletedObj;
};

Repository.prototype.update = function(id,entity) {
  return this.storage.update(id,entity.data);
};

Repository.prototype.getAll = function() {
  return this.storage.getAll();
};


