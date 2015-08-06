var Objs = {
  simple : function() {
  }
};

function objFactory (data) {
  this.name = data.name;
};


objFactory.prototype = {
    constructor: objFactory,
    makeSimpleObj: function () {
        return new Objs.simple();
    }
}