describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head", function() {
    expect(Object.keys(linkedList)).toContain("head");
  });

  //this is the section that tests functionality of insert method
  describe("insert", function() {
    it("should be a method", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    it("should create new element and make head point to it", function() {
      linkedList.insert(10);

      expect(linkedList.head.content === 10).toBeTruthy();
    })
  });

  describe("contains", function() {
    it("should be a method", function() {
      expect(linkedList.contains).toEqual(jasmine.any(Function));
    });

    it("should return 'true' if linkedList has a particular content", function() {
      linkedList.insert("mark");

      expect(linkedList.contains("mark")).toBeTruthy();
    });

    it("should return 'false' if linkedList does not have particular content", function() {
      linkedList.insert("mark");

      expect(linkedList.contains("tim")).toBeFalsy();
    });
  });

  describe("delete", function() {
    it("should be a method", function() {
      expect(linkedList.delete).toEqual(jasmine.any(Function));
    });

    it("should find and delete content in linkedList", function() {
      linkedList.insert("cartman");
      linkedList.insert("test");
      linkedList.insert("darthvader");
      linkedList.delete("test");

      expect(linkedList.contains("test")).toBeFalsy();
    });
  })
});