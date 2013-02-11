// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {
    head: null,
    insert: function(newContent) {
      var newElement = {
        content: newContent,	
        pointer: this.head,
   	    hasAfter: function(value) {
          return this.content === value || this.pointer !== null && this.pointer.hasAfter(value) 
        }
      }
      this.head = newElement;
      return newElement;
    },
    contains: function(value) {
      return this.head !== null && this.head.hasAfter(value);
    },
    delete: function(findItem) {
      var lastLookedAt = null;
      for(var crntElement = this.head; crntElement !== null; crntElement = crntElement.pointer) {
        if(crntElement.content === findItem) {
          lastLookedAt.pointer = crntElement.pointer;
          return lastLookedAt.pointer;
        }
        lastLookedAt = crntElement;
      }
      console.log("Item to be deleted not found in list!");
    }
  };
  return linkedList;
};