
function DSHashTable(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size || 0;
}

DSHashTable.prototype.calculateHash = function(key) {
    return key.toString().length % this.size;
}

DSHashTable.prototype.add = function(key, value) {
    let hash = this.calculateHash(key);

    if (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
    }

    this.values[hash][key] = value;
}

DSHashTable.prototype.remove = function(key) {
    let hash = this.calculateHash(key);

    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
    }
}

DSHashTable.prototype.search = function(key) {
    let hash = this.calculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        return this.values[hash][key];
    }
    return null;
}

DSHashTable.prototype.length = function() {
    return this.numberOfValues;
}

DSHashTable.prototype.print = function() {
    let string = '';
    for (let value in this.values) {
        for (let key in this.values[value]) {
            string += this.values[value][key] + ' ';
        }
    }
    return string.trim();
}

module.exports = DSHashTable;