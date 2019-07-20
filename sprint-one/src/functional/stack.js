var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var last = 0;
    for (var key in storage){
      if (parseInt(key) > last){
        last = parseInt(key);
      }
    }
    storage[last + 1] = value;
  };

  someInstance.pop = function() {
    var last = 0;
    for (var key in storage){
      if (parseInt(key) > last){
        last = parseInt(key);
      }
    }
    var deleted = storage[last];
    delete storage[last];
    return deleted;
  }; 

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage){
      counter++;
    }
    return counter;
  };

  return someInstance;
}; 
