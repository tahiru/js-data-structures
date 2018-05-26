
const DSHashTable = require('./DSHashTable');

describe('DSHashTable', () => {
    describe('initialization', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('initializes a new object with an empty hash table', () => {
            expect(testHashTable.length()).toEqual(0);
        });
    });

    describe('add', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('can add key/value pairings to the hash table', () => {
            testHashTable.add('first', 1);
            testHashTable.add('second', 2);
            testHashTable.add('third', 3);
    
            expect(testHashTable.length()).toEqual(3);
        });
    
        it('can overwrite the value for a certain key, when adding a new value with an existing key', () => {
            testHashTable.add('first', 1);
    
            expect(testHashTable.search('first')).toEqual(1);
            expect(testHashTable.length()).toEqual(1);
    
            testHashTable.add('first', 2);
    
            expect(testHashTable.search('first')).toEqual(2);
            expect(testHashTable.length()).toEqual(1);
        });
    
        it('can add an object/array as a value', () => {
            let array = [1, 2, 3];
            let object = { 'one': 1, 'two': 2, 'three': 3 };
    
            testHashTable.add('first', array);
    
            expect(testHashTable.search('first')).toEqual(array);
            expect(testHashTable.length()).toEqual(1);
    
            testHashTable.add('second', object);
    
            expect(testHashTable.search('second')).toEqual(object);
            expect(testHashTable.length()).toEqual(2);
        });
    });

    describe('remove', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('can remove a key, and its associated value, from the hash table', () => {
            testHashTable.add('first', 1);
            testHashTable.add('second', 2);
            testHashTable.add('third', 3);
            testHashTable.remove('first');
    
            expect(testHashTable.search('first')).toEqual(null);
            expect(testHashTable.length()).toEqual(2);
        });
    
        it('leaves the hash table unchanged, if the key requested for removal is not found', () => {
            testHashTable.add('first', 1);
            testHashTable.add('second', 2);
            testHashTable.add('third', 3);
            testHashTable.remove('fourth');
    
            expect(testHashTable.length()).toEqual(3);
        });
    });

    describe('search', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('can search for a specific value, given a key', () => {
            testHashTable.add('first', 1);
            testHashTable.add('second', 2);
            let search = testHashTable.search('first');
    
            let actual = search;
            let expected = 1;
    
            expect(actual).toEqual(expected);
        });
    
        it('returns "null" if the searched key is not found', () => {
            testHashTable.add('first', 1);
            let search = testHashTable.search('second');
    
            let actual = search;
            let expected = null;
    
            expect(actual).toEqual(expected);
        });
    });

    describe('length', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('returns 0 for a newly created hash table', () => {
            let length = testHashTable.length();
            let actual = length;
            let expected = 0;

            expect(actual).toEqual(expected);
        });
    
        it('returns the length of the hash table (number of values)', () => {
            testHashTable.add('first', 1);
            let length = testHashTable.length();
    
            let actual = length;
            let expected = 1;

            expect(actual).toEqual(expected);
        });
    });

    describe('print', () => {
        let testHashTable;

        beforeEach(() => {
            testHashTable = new DSHashTable();
        });

        it('prints a blank string for a newly initialized hash table', () => {
            let print = testHashTable.print();
            let actual = print;
            let expected = '';

            expect(actual).toEqual(expected);
        });
    
        it('can print the current values in the hash table', () => {
            testHashTable.add('first', 1);
            testHashTable.add('second', 2);
            testHashTable.add('third', 3);
            testHashTable.add('fourth', 4);
            testHashTable.add('fifth', 5);
            let print = testHashTable.print();
            
            let actual = print;
            let expected = '1 2 3 4 5';
    
            expect(actual).toEqual(expected);
        });
    });
});