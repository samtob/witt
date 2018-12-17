module.exports = function witt(string) {
    if (typeof string !== "string") throw new TypeError("Witt wants a string!");
    return string.replace(/\s/g, "");
  };