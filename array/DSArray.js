
function DSArray() {
    this.array = [];
}

DSArray.prototype.add = function(data) {
    this.array.push(data);
}

DSArray.prototype.remove = function(data) {
    if (this.array.indexOf(data) === -1) {
        return;
    }

    this.array = this.array.filter(function(current) {
        return current !== data
    });
}

DSArray.prototype.search = function(data) {
    let foundIndex = this.array.indexOf(data);
    if (foundIndex !== -1) {
        return foundIndex;
    }
    return null;
}

DSArray.prototype.index = function(index) {
    return this.array[index] || null;
}

DSArray.prototype.length = function() {
    return this.array.length;
}

DSArray.prototype.print = function() {
    return this.array.join(' ');
}

module.exports = DSArray;