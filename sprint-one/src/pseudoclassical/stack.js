var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value){
	var last = 0;
	for (var key in this.storage){
		if (parseInt(key) > last){
			last = parseInt(key);
		}
	}
	this.storage[last + 1] = value;
}

Stack.prototype.pop = function(){
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

Stack.prototype.size = function(){
	var counter = 0;
	for (var key in this.storage){
		counter++;
	}
	return counter; 
}


