class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  push(value){
  	var last = 0;
  	for (var key in this.storage){
  		if (parseInt(key) > last){
  			last = parseInt(key);
  		}
  	}
  	this.storage[last + 1] = value;
  }

  pop(){
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

  size(){
  	var counter = 0;
  	for (var key in this.storage){
  		counter++;
  	}
  	return counter;
  }

}