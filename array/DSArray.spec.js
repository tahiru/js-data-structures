
const DSArray = require('./DSArray');

describe('DSArray', () => {
    describe('initialization', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('initializes a new object with an empty array', () => {
            expect(testArray.array).toEqual([]);
            expect(testArray.length()).toEqual(0);
        });
    });

    describe('add', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });
        
        it('can add alements to the array', () => {
            testArray.add(1);
            
            expect(testArray.length()).toEqual(1);
        });
    });

    describe('remove', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('can remove elements from the array', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            testArray.remove(1);

            expect(testArray.length()).toEqual(2);
        });
    
        it('returns the array unchanged if the element was not found', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            testArray.remove(4);

            expect(testArray.length()).toEqual(3);
        });
    });

    describe('search', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('can search for elements in the array, returning the index if found', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let search = testArray.search(1);
    
            const actual = search;
            const expected = 0;

            expect(actual).toEqual(expected);
        });
    
        it('can search for elements in the array, returning null if not found', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let search = testArray.search(4);
    
            const actual = search;
            const expected = null;

            expect(actual).toEqual(expected);
        });
    });

    describe('index', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('can get the element at an index, returning the element at the index if found', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let indexedElement = testArray.index(2);
    
            const actual = indexedElement;
            const expected = 3;
    
            expect(actual).toEqual(expected);
        });
    
        it('can get the element at the index, returning null if not found', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let indexedElement = testArray.index(3);
    
            const actual = indexedElement;
            const expected = null;
    
            expect(actual).toEqual(expected);
        });
    });

    describe('length', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('initially starts out with a length of 0', () => {
            expect(testArray.length()).toEqual(0);
        });

        it('returns the length of the array', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let length = testArray.length();
    
            const actual = length;
            const expected = 3;
    
            expect(actual).toEqual(expected);
        });
    });

    describe('print', () => {
        let testArray;

        beforeEach(() => {
            testArray = new DSArray();
        });

        it('prints an empty string if the array is empty', () => {
            let printed = testArray.print();
    
            const actual = printed;
            const expected = '';
    
            expect(actual).toEqual(expected);
        });
    
        it('Prints a string representation of the array, delimited by spaces', () => {
            testArray.add(1);
            testArray.add(2);
            testArray.add(3);
            let printed = testArray.print();
    
            const actual = printed;
            const expected = '1 2 3';
    
            expect(actual).toEqual(expected);
        });
    });
});