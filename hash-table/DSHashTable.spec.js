
const DSHashTable = require('./DSHashTable');

describe('The DSHashTable class', () => {
    let testHashTable,
        calculateHashMock,
        addMock,
        removeMock,
        searchMock,
        lengthMock,
        printMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
    });

    it('Initializes a new object with an empty hash table', () => {
        expect(testHashTable.values).toEqual({});
        expect(testHashTable.numberOfValues).toEqual(0);
        expect(testHashTable.size).toEqual(0);
    });

    it('Has a function defined for calculating a hash to store elements', () => {
        calculateHashMock = jest.fn(() => testHashTable.calculateHash());
        expect(calculateHashMock).toBeDefined();
    });

    it('Has a function defined for adding values to the hash table', () => {
        addMock = jest.fn((key, value) => testHashTable.add(key, value));
        expect(addMock).toBeDefined();
    });

    it('Has a function defined for removing values from the hash table', () => {
        removeMock = jest.fn((key) => testHashTable.remove(key));
        expect(removeMock).toBeDefined();
    });

    it('Has a function defined for searching the hash table for a value', () => {
        searchMock = jest.fn((key) => testHashTable.search(key));
        expect(searchMock).toBeDefined();
    });

    it('Has a function defined for determining the length (number of values) in the hash table', () => {
        lengthMock = jest.fn(() => testHashTable.length());
        expect(lengthMock).toBeDefined();
    });

    it('Has a function defined for printing the elements of the hash table', () => {
        printMock = jest.fn(() => testHashTable.print());
        expect(printMock).toBeDefined();
    });
});

describe('The "add" function of the DSHashTable class', () => {
    let testHashTable,
        addMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
        addMock = jest.fn((key, value) => testHashTable.add(key, value));
    });

    it('Can add key/value pairings to the hash table', () => {
        addMock('first', 1);
        addMock('second', 2);
        addMock('third', 3);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(3);
        expect(testHashTable.length()).toEqual(3);
    });

    it('Can overwrite the value for a certain key, when adding a new value with an existing key', () => {
        addMock('first', 1);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(1);
        expect(testHashTable.search('first')).toEqual(1);
        expect(testHashTable.length()).toEqual(1);

        addMock('first', 2);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(2);
        expect(testHashTable.search('first')).toEqual(2);
        expect(testHashTable.length()).toEqual(1);
    });

    it('Can add an object/array as a value', () => {
        let array = [1, 2, 3];
        let object = { 'one': 1, 'two': 2, 'three': 3 };

        addMock('first', array);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(1);
        expect(testHashTable.search('first')).toEqual(array);
        expect(testHashTable.length()).toEqual(1);

        addMock('second', object);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(2);
        expect(testHashTable.search('second')).toEqual(object);
        expect(testHashTable.length()).toEqual(2);
    });
});

describe('The "remove" function of the DSHashTable class', () => {
    let testHashTable,
        removeMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
        removeMock = jest.fn((key) => testHashTable.remove(key));
    });

    it('Can remove a key, and its associated value, from the hash table', () => {
        testHashTable.add('first', 1);
        testHashTable.add('second', 2);
        testHashTable.add('third', 3);
        removeMock('first');

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledTimes(1);
        expect(testHashTable.search('first')).toEqual(null);
        expect(testHashTable.length()).toEqual(2);
    });

    it('Leaves the hash table unchanged, if the key requested for removal is not found', () => {
        testHashTable.add('first', 1);
        testHashTable.add('second', 2);
        testHashTable.add('third', 3);
        removeMock('fourth');

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledTimes(1);
        expect(testHashTable.length()).toEqual(3);
    });
});

describe('The "search" function of the DSHashTable class', () => {
    let testHashTable,
        searchMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
        searchMock = jest.fn((key) => testHashTable.search(key));
    });

    it('Can search for a specific value, given a key', () => {
        testHashTable.add('first', 1);
        testHashTable.add('second', 2);
        let search = searchMock('first');

        expect(searchMock).toHaveBeenCalled();
        expect(searchMock).toHaveBeenCalledWith('first');

        let actual = search;
        let expected = 1;

        expect(actual).toEqual(expected);
    });

    it('Returns "null" if the searched key is not found', () => {
        testHashTable.add('first', 1);
        let search = searchMock('second');

        expect(searchMock).toHaveBeenCalled();
        expect(searchMock).toHaveBeenCalledWith('second');

        let actual = search;
        let expected = null;

        expect(actual).toEqual(expected);
    });
});

describe('The "length" function of the DSHashTable class', () => {
    let testHashTable,
        lengthMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
        lengthMock = jest.fn(() => testHashTable.length());
    });

    it('Returns 0 for a newly created hash table', () => {
        let length = lengthMock();
        let actual = length;
        let expected = 0;

        expect(lengthMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });

    it('Returns the length of the hash table (number of values)', () => {
        testHashTable.add('first', 1);
        let length = lengthMock();

        let actual = length;
        let expected = 1;

        expect(lengthMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });
});

describe('The "print" function of the DSHashTable class', () => {
    let testHashTable,
        printMock;
    
    beforeEach(() => {
        testHashTable = new DSHashTable();
        printMock = jest.fn(() => testHashTable.print());
    });

    it('Prints a blank string for a newly initialized hash table', () => {
        let print = printMock();
        let actual = print;
        let expected = '';

        expect(printMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });

    it('Can print the current values in the hash table', () => {
        testHashTable.add('first', 1);
        testHashTable.add('second', 2);
        testHashTable.add('third', 3);
        testHashTable.add('fourth', 4);
        testHashTable.add('fifth', 5);
        let print = printMock();

        expect(printMock).toHaveBeenCalled();
        
        let actual = print;
        let expected = '1 2 3 4 5';

        expect(actual).toEqual(expected);
    });
});