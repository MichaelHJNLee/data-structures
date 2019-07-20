var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
	var last = 0;
	for (var key in this.storage){
		if (parseInt(key) > last){
			last = parseInt(key);
		}
	}
	this.storage[last + 1] = value;
}

stackMethods.pop = function(){
	var last = 0;
	for (var key in this.storage){
		if (parseInt(key) > last){
			last = parseInt(key);
		}
	}
	var deleted = this.storage[last];
	delete this.storage[last];
	return deleted;
}

stackMethods.size = function(){
	var counter = 0;
	for (var key in this.storage){
		counter++;
	}
	return counter; 
} 


