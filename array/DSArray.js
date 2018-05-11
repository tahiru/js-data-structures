
class DSArray {
    constructor() {
        this.array = [];
    }

    add(data) {
        this.array.push(data);
    }

    remove(data) {
        if (this.array.indexOf(data) === -1) {
            return;
        }

        this.array = this.array.filter((current) => {
            return current !== data;
        });
    }

    search(data) {
        let foundIndex = this.array.indexOf(data);
        return foundIndex === -1 ? null : foundIndex;
    }

    index(index) {
        return this.array[index] || null;
    }

    length() {
        return this.array.length;
    }

    print() {
        return this.array.join(' ');
    }
}

module.exports = DSArray;