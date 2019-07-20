class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  enqueue(value){
  	var last = 0;
  	for (var key in this.storage){
  		if (parseInt(key) > last){
  			last = parseInt(key);
  		}
  	}
  	this.storage[last + 1] = value;
  }

  dequeue(){
  	for (var key in this.storage){
  		var newKey = parseInt(key) - 1;
  		this.storage[newKey] = this.storage[key];
  		delete this.storage[key];
  	}
  	var deleted = this.storage[0];
  	delete this.storage[0];
  	return deleted;
  }

  size(){
  	var counter = 0;
  	for (var key in this.storage){
  		counter++;
  	}
  	return counter; 
  }
}
