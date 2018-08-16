var string = {};

// Place a string into another string at a
// specific index.
string.insertAt = function(position, str, add) {
  var error;
  if (!position) {
    error = 'position';
  } else if (!str) {
    error = 'str';
  } else if (!add) {
    error = 'add';
  }

  if (error) {
    return `GageLib.string.insertAt() - '${error}' not specified.`;
  } else {
    return [str.slice(0, position), add, str.slice(position)].join('');
  }
};

module.exports = string;
