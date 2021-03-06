var assert = require('assert');
describe('Array', function() {
  describe('indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
describe('Array', function() {
  describe('indexOf()', function() {
    it('should return 0 when the value is present', function() {
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});
