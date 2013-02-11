var makeNode = function(newPayload){
  var node = {
  	payload: newPayload,
    children: [],
    addChild: function(newChildsPayload) {
      this.children.push(makeNode(newChildsPayload));
  	},
    traverse: function() {
      var traverseArray = [];
      traverseArray.push(this.payload);
      for(var i = 0; i < this.children.length; i++) {
   	    traverseArray = traverseArray.concat(this.children[i].traverse());
      };
      return traverseArray;
    }
  };
  return node;
}