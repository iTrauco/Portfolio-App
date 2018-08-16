var math = {};

// Get a random number between two.
math.getRandom = function(min, max) {
  return Math.random() * (max - min + 1) + min;
};

// Convert to radians
math.toRadians = function(degrees) {
  return (degrees * Math.PI) / 180;
};

// Converts from radians to degrees.
math.toDegrees = function(radians) {
  return (radians * 180) / Math.PI;
};

// Get distance between two points
math.getDistance = function(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt(a * a + b * b);
};

// Returns an object in a list selected by weighted
// randomness.
math.getWeightedFrom = function(list) {
  var totalWeight = 0;
  var selectedItem;

  // Calculate the total combined weight of all
  // items in the list.
  for (var i = 0; i < list.length; i++) {
    totalWeight += list[i].weight;
  }

  // Randomly pick a weight between 0 and the max
  var randomWeight = math.getRandom(1, totalWeight * 1000) / 1000;

  // Make sure it is not larger than the maximum weight
  if (randomWeight > totalWeight) {
    randomWeight = totalWeight;
  }

  // Select from the randomly picked weight
  // until below zero, then return the current
  // item.
  for (var i = 0; i < list.length; i++) {
    var item = list[i];

    randomWeight -= item.weight;
    if (randomWeight <= 0) {
      selectedItem = item;
      break;
    }
  }

  return item;
};

module.exports = math;
