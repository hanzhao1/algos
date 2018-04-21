/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, data) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);
    if (this.retrieve(key)) {
      this.remove(key);
    }
    storage.push([hash, data]);
    // TODO: implement `insert()`
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    let hash = getIndexBelowMaxForKey(key, storageLimit);
    return storage.reduce((retrieved, tuple) => {
      if (tuple[0] === hash) {
        retrieved = tuple[1];
      }
      return retrieved;
    }, null);
  };

  result.remove = function(/*...*/) {
    // TODO: implement `remove()`
  };

  return result;
};
