
const DSSet = require('./DSSet');

describe('DSSet', () => {
    describe('initialization', () => {
        let testSet;

        beforeEach(() => {
            testSet = new DSSet();
        });

        it('initializes a new object with an empty array for the set', () => {
            expect(testSet.length()).toEqual(0);
        });
    });

    describe('add', () => {
        let testSet;

        beforeEach(() => {
            testSet = new DSSet();
        });

        it('can add an element to the set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);

            expect(testSet.length()).toEqual(3);
        });
    
        it('only adds elements once, preserving the uniqueness of the set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
            testSet.add(1);

            expect(testSet.length()).toEqual(3);
    
            const actual = testSet.values;
            const expected = [1, 2, 3];
    
            expect(actual).toEqual(expected);
        });
    });

    describe('remove', () => {
        let testSet;

        beforeEach(() => {
            testSet = new DSSet();
        });

        it('can remove an element from the set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            expect(testSet.length()).toEqual(3);
    
            testSet.remove(1);
    
            expect(testSet.length()).toEqual(2);
        });
    
        it('leaves the set unchanged, if the specified element to remove is not found', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            expect(testSet.length()).toEqual(3);
    
            testSet.remove(4);

            expect(testSet.length()).toEqual(3);
        });
    });

    describe('contains', () => {
        let testSet;

        beforeEach(() => {
            testSet = new DSSet();
        });

        it('can determine if an element is contained within a set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            let isContained = testSet.contains(1);

            const actual = isContained;
            const expected = true;

            expect(actual).toEqual(expected);
        });

        it('can determine if an element is not contained within a set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);

            let isNotContained = testSet.contains(4);

            const actual = isNotContained;
            const expected = false;
    
            expect(actual).toEqual(expected);
        });
    });

    describe('union', () => {
        let testSet,
            testSet2;

        beforeEach(() => {
            testSet = new DSSet();
            testSet2 = new DSSet();
        });

        it('can create the union of two different sets', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(4);
            testSet2.add(5);
            testSet2.add(6);
    
            let unionSet = testSet.union(testSet2);

            expect(unionSet.length()).toEqual(6);
    
            const actual = unionSet.values;
            const expected = [1, 2, 3, 4, 5, 6];
    
            expect(actual).toEqual(expected);
        });
    
        it('preserves the uniqueness of the set, if duplicate elements are found during a union', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(3);
            testSet2.add(4);
            testSet2.add(5);
    
            let unionSet = testSet.union(testSet2);
    
            expect(unionSet.length()).toEqual(5);
    
            const actual = unionSet.values;
            const expected = [1, 2, 3, 4, 5];
    
            expect(actual).toEqual(expected);
        });
    
        it('creates an empty set, in the event of a union between two empty sets', () => {
            let unionSet = testSet.union(testSet2);

            expect(unionSet.length()).toEqual(0);
        });
    });

    describe('intersect', () => {
        let testSet,
            testSet2;

        beforeEach(() => {
            testSet = new DSSet();
            testSet2 = new DSSet();
        });

        it('can create the intersection of two sets', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(1);
            testSet2.add(2);
            testSet2.add(3);
    
            let intersectionSet = testSet.intersect(testSet2);

            expect(intersectionSet.length()).toEqual(3);
        });
    
        it('returns an empty set if the intersection of two sets returns no elements', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(4);
            testSet.add(5);
            testSet2.add(6);
    
            let intersectionSet = testSet.intersect(testSet2);

            expect(intersectionSet.length()).toEqual(0);
        });
    });

    describe('difference', () => {
        let testSet,
            testSet2;

        beforeEach(() => {
            testSet = new DSSet();
            testSet2 = new DSSet();
        });

        it('can create the difference of two sets', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(2);
            testSet2.add(3);
            testSet2.add(4);
    
            let differenceSet = testSet.difference(testSet2);

            expect(differenceSet.length()).toEqual(1);
            expect(differenceSet.values).toEqual([1]);
        });
    
        it('returns an empty set if the difference returns no elements', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
            
            testSet2.add(1);
            testSet2.add(2);
            testSet2.add(3);
    
            let differenceSet = testSet.difference(testSet2);

            expect(differenceSet.length()).toEqual(0);
            expect(differenceSet.values).toEqual([]);
        });
    });

    describe('isSubset', () => {
        let testSet,
            testSet2;

        beforeEach(() => {
            testSet = new DSSet();
            testSet2 = new DSSet();
        });

        it('can determine if one set is the subset of another set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);
    
            testSet2.add(1);
            testSet2.add(2);
            testSet2.add(3);
            testSet2.add(4);
    
            let isSubset = testSet.isSubset(testSet2);

            expect(isSubset).toBe(false);
        });
    });

    describe('length', () => {
        let testSet;
    
        beforeEach(() => {
            testSet = new DSSet();
        });

        it('initially starts with a length of 0', () => {
            expect(testSet.length()).toEqual(0);
        });

        it('returns the length of the set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);

            let length = testSet.length();

            const actual = length;
            const expected = 3;

            expect(actual).toEqual(expected);
        });
    });

    describe('print', () => {
        let testSet;
        
        beforeEach(() => {
            testSet = new DSSet();
        });

        it('returns an empty string printout, for an empty set', () => {
            let printout = testSet.print();

            const actual = printout;
            const expected = '';

            expect(actual).toEqual(expected);
        });

        it('returns a printout of the set', () => {
            testSet.add(1);
            testSet.add(2);
            testSet.add(3);

            let printout = testSet.print();

            const actual = printout;
            const expected = '1 2 3';

            expect(actual).toEqual(expected);
        });
    });
});