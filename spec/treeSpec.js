describe("node", function() {
  var node;

  beforeEach(function() {
    node = makeNode("test");
  });

  it("should have an array of children", function() {
    expect(node.children).toEqual(jasmine.any(Array));
  });

  it("should have a payload equal to payload parameter passed", function() {
    expect(node.payload).toEqual("test");
  });

  describe('addChild', function(){

    it("should be a method", function() {
      expect(node.addChild).toEqual(jasmine.any(Function));
    });

    it("should increase the length of the children array by one", function() {
      var oldChildrenLength = node.children.length;
      node.addChild('tim');
      var newChildrenLength = node.children.length;

      expect(oldChildrenLength).toEqual(newChildrenLength - 1);
    });
  });

  describe('traverse', function() {

    it("should be a method", function() {
      expect(node.traverse).toEqual(jasmine.any(Function));
    });

    it("should return array with payload of all descendants", function() {      
      node.addChild(3);
      node.addChild(4);
      node.addChild(5);
      node.children[0].addChild("darthvader");

      expect(node.traverse()).toEqual(["test", 3, "darthvader", 4, 5]);

    })
  });

});