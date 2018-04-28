
function DSSet() {
    this.values = [];
    this.numberOfValues = 0;
}

DSSet.prototype.add = function(value) {
    if (!this.contains(value)) {
        this.values.push(value);
        this.numberOfValues++;
    }
}

DSSet.prototype.remove = function(value) {
    if (this.contains(value)) {
        let index = this.values.indexOf(value);

        this.values.splice(index, 1);
        this.numberOfValues--;
    }
}

DSSet.prototype.contains = function(value) {
    return this.values.indexOf(value) !== -1;
}

DSSet.prototype.union = function(set) {
    let newSet = new DSSet();
    let combinedSets = this.values.concat(set.values);

    combinedSets.forEach(function(value) {
        newSet.add(value);
    });
    return newSet;
}

DSSet.prototype.intersect = function(set) {
    let newSet = new DSSet;
    this.values.forEach(function(value) {
        if (set.contains(value)) {
            newSet.add(value);
        }
    });
    return newSet;
}

DSSet.prototype.difference = function(set) {
    let newSet = new DSSet();
    this.values.forEach(function(value) {
        if (!set.contains(value)) {
            newSet.add(value);
        }
    });
    return newSet;
}

DSSet.prototype.isSubset = function(set) {
    return set.values.every(function(value) {
        return this.contains(value);
    }, this);
}

DSSet.prototype.length = function() {
    return this.numberOfValues;
}

DSSet.prototype.print = function() {
    return this.values.join(' ');
}

module.exports = DSSet;