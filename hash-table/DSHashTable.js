
class DSHashTable {
    constructor(size = 0) {
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }

    calculateHash(key) {
        return key.toString().length % this.size;
    }

    add(key, value) {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }

        if(!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }

        this.values[hash][key] = value;
    }

    remove(key) {
        let hash = this.calculateHash(key);

        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }

    search(key) {
        let hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        }
        return null;
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        let string = '';
        for (let value in this.values) {
            for (let key in this.values[value]) {
                string += `${this.values[value][key]} `;
            }
        }
        return string.trim();
    }
}

module.exports = DSHashTable;