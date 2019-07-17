var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var last = 0;
    for (var key in storage){
      if (parseInt(key) > last){
        last = parseInt(key);
      }
    }
    storage[last + 1] = value;
  };

  someInstance.dequeue = function() {
    var deleted = storage['1'];
    delete storage['1'];
    for (var key in storage){
      var val = storage[key];
      var newKey = parseInt(key) - 1;
      delete storage[key];
      storage[newKey] = val;
    }
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
