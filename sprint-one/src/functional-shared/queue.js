var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods)
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value){
	var last = 0;
	for (var key in this.storage){
		if (parseInt(key) > last){
			last = parseInt(key);
		}
	}
	this.storage[last + 1] = value;
}

queueMethods.dequeue = function(){
	for (var key in this.storage){
		var newKey = parseInt(key) - 1;
		var val = this.storage[key];
		this.storage[newKey] = val;
		delete this.storage[key];
	}
	var deleted = this.storage[0];
	delete this.storage[0];
	return deleted;
}

queueMethods.size = function(){
	var counter = 0;
	for (var key in this.storage){
		counter++;
	}
	return counter; 
} 


