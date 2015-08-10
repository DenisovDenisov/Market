/*global beforeEach, afterEach */
/*global describe, it, expect */
/*global window, eb, loadFixtures */
describe("Fabrique", function() {
    it("should return object", function() {
        var object = objMaker.factory('Shop', {
            name: 'ffff'
        });
        expect(typeof object).toBe('object');
        // console.log(object);
    });
});