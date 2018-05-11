
class DSSet {
    constructor() {
        this.values = [];
        this.numberOfValues = 0;
    }

    contains(data) {
        return this.values.indexOf(data) !== -1;
    }

    add(data) {
        if (!this.contains(data)) {
            this.values.push(data);
            this.numberOfValues++;
        }
    }

    remove(data) {
        if (this.contains(data)) {
            let index = this.values.indexOf(data);
            this.values.splice(index, 1);
            this.numberOfValues--;
        }
    }

    union(set) {
        let newSet = new DSSet();
        let combinedSet = this.values.concat(set.values);
        combinedSet.forEach((value) => {
            newSet.add(value);
        });
        return newSet;
    }

    intersect(set) {
        let newSet = new DSSet();
        this.values.forEach((value) => {
            if (set.contains(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    }

    difference(set) {
        let newSet = new DSSet();
        this.values.forEach((value) => {
            if (!set.contains(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    }

    isSubset(set) {
        return set.values.every((value) => {
            return this.contains(value);
        }, this);
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        return this.values.join(' ');
    }
}

module.exports = DSSet;