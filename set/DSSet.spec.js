
const DSSet = require('./DSSet');

describe('The DSSet class', () => {
    let testSet,
        addMock,
        removeMock,
        containsMock,
        unionMock,
        intersectMock,
        differenceMock,
        isSubsetMock,
        lengthMock,
        printMock;
    
    beforeEach(() => {
        testSet = new DSSet(); 
    });

    it('Initializes a new object with an empty array for the set', () => {
        expect(testSet.values).toEqual([]);
        expect(testSet.numberOfValues).toEqual(0);
    });

    it('Has a function defined for adding values to the set', () => {
        addMock = jest.fn((value) => testSet.add(value));
        expect(addMock).toBeDefined();
    });

    it('Has a function defined for removing values from the set', () => {
        removeMock = jest.fn((value) => testSet.remove(value));
        expect(removeMock).toBeDefined();
    });

    it('Has a function defined for determining if the set contains a specific value', () => {
        containsMock = jest.fn((value) => testSet.contains(value));
        expect(containsMock).toBeDefined();
    });

    it('Has a function defined for creating a union between two sets', () => {
        unionMock = jest.fn((set) => testSet.union(set));
        expect(unionMock).toBeDefined();
    });

    it('Has a function defined for creating an intersection between two sets', () => {
        intersectMock = jest.fn((set) => testSet.intersect(set));
        expect(intersectMock).toBeDefined();
    });

    it('Has a function defined for creating a difference between two sets', () => {
        differenceMock = jest.fn((set) => testSet.difference(set));
        expect(differenceMock).toBeDefined();
    });

    it('Has a function defined to determine if a given set is a subset of the set', () => {
        isSubsetMock = jest.fn((set) => testSet.isSubset(set));
        expect(isSubsetMock).toBeDefined();
    });

    it('Has a function defined to determine the length of the set', () => {
        lengthMock = jest.fn(() => testSet.length());
        expect(lengthMock).toBeDefined();
    });

    it('Has a function defined to print the elements of the set', () => {
        printMock = jest.fn(() => testSet.print());
        expect(printMock).toBeDefined();
    });
});

describe('The "add" function of the DSSet class', () => {
    let testSet,
        addMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        addMock = jest.fn((value) => testSet.add(value));
    });

    it('Can add an element to the set', () => {
        addMock(1);
        addMock(2);
        addMock(3);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(3);
        expect(testSet.length()).toEqual(3);
    });

    it('Only adds elements once, preserving the uniqueness of the set', () => {
        addMock(1);
        addMock(2);
        addMock(3);
        addMock(1);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(4);
        expect(testSet.length()).toEqual(3);

        const actual = testSet.values;
        const expected = [1, 2, 3];

        expect(actual).toEqual(expected);
    });
});

describe('The "remove" function of the DSSet class', () => {
    let testSet,
        removeMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        removeMock = jest.fn((value) => testSet.remove(value));
    });

    it('Can remove an element from the set', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        expect(testSet.length()).toEqual(3);

        removeMock(1);

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledTimes(1);
        expect(testSet.length()).toEqual(2);
    });

    it('Leaves the set unchanged, if the specified element to remove is not found', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        expect(testSet.length()).toEqual(3);

        removeMock(4);

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledTimes(1);
        expect(testSet.length()).toEqual(3);
    });
});

describe('The "contains" function of the DSSet class', () => {
    let testSet,
        containsMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        containsMock = jest.fn((value) => testSet.contains(value));
    });

    it('Can determine whether or not an element is contained within a set', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        let isContained = containsMock(1);
        let isNotContained = containsMock(4);

        expect(containsMock).toHaveBeenCalled();
        expect(containsMock).toHaveBeenCalledTimes(2);
        expect(testSet.length()).toEqual(3);

        let actual = [isContained, isNotContained];
        let expected = [true, false];

        expect(actual).toEqual(expected);
    });
});

describe('The "union" function of the DSSet class', () => {
    let testSet,
        testSet2,
        unionMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        testSet2 = new DSSet();
        unionMock = jest.fn((set) => testSet.union(set));
    });

    it('Can create the union of two different sets', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(4);
        testSet2.add(5);
        testSet2.add(6);

        let unionSet = unionMock(testSet2);

        expect(unionMock).toHaveBeenCalled();
        expect(unionMock).toHaveBeenCalledWith(testSet2);
        expect(unionSet.length()).toEqual(6);

        const actual = unionSet.values;
        const expected = [1, 2, 3, 4, 5, 6];

        expect(actual).toEqual(expected);
    });

    it('Preserves the uniqueness of the set, if duplicate elements are found during a union', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(3);
        testSet2.add(4);
        testSet2.add(5);

        let unionSet = unionMock(testSet2);

        expect(unionMock).toHaveBeenCalled();
        expect(unionMock).toHaveBeenCalledWith(testSet2);
        expect(unionSet.length()).toEqual(5);

        const actual = unionSet.values;
        const expected = [1, 2, 3, 4, 5];

        expect(actual).toEqual(expected);
    });

    it('Creates an empty set, in the event of a union between two empty sets', () => {
        let unionSet = unionMock(testSet2);

        expect(unionMock).toHaveBeenCalled();
        expect(unionMock).toHaveBeenCalledWith(testSet2);
        expect(unionSet.length()).toEqual(0);
    });
});

describe('The "intersect" function of the DSSet class', () => {
    let testSet,
        testSet2,
        intersectMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        testSet2 = new DSSet();
        intersectMock = jest.fn((set) => testSet.intersect(set));
    });

    it('Can create the intersection of two sets', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(1);
        testSet2.add(2);
        testSet2.add(3);

        let intersectionSet = intersectMock(testSet2);

        expect(intersectMock).toHaveBeenCalled();
        expect(intersectMock).toHaveBeenCalledWith(testSet2);
        expect(intersectionSet.length()).toEqual(3);
    });

    it('Returns an empty set if the intersection of two sets returns no elements', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(4);
        testSet.add(5);
        testSet2.add(6);

        let intersectionSet = intersectMock(testSet2);

        expect(intersectMock).toHaveBeenCalled();
        expect(intersectMock).toHaveBeenCalledWith(testSet2);
        expect(intersectionSet.length()).toEqual(0);
    });
});

describe('The "difference" function of the DSSet class', () => {
    let testSet,
        testSet2,
        differenceMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        testSet2 = new DSSet();
        differenceMock = jest.fn((set) => testSet.difference(set));
    });

    it('Can create the difference of two sets', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(2);
        testSet2.add(3);
        testSet2.add(4);

        let differenceSet = differenceMock(testSet2);

        expect(differenceMock).toHaveBeenCalled();
        expect(differenceMock).toHaveBeenCalledWith(testSet2);
        expect(differenceSet.length()).toEqual(1);
        expect(differenceSet.values).toEqual([1]);
    });

    it('Returns an empty set if the difference returns no elements', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);
        
        testSet2.add(1);
        testSet2.add(2);
        testSet2.add(3);

        let differenceSet = differenceMock(testSet2);

        expect(differenceMock).toHaveBeenCalled();
        expect(differenceMock).toHaveBeenCalledWith(testSet2);
        expect(differenceSet.length()).toEqual(0);
        expect(differenceSet.values).toEqual([]);
    });
});

describe('The "isSubset" function of the DSSet class', () => {
    let testSet,
        testSet2,
        isSubsetMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        testSet2 = new DSSet();
        isSubsetMock = jest.fn((set) => testSet.isSubset(set));
    });

    it('Can determine if one set is the subset of another set', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        testSet2.add(1);
        testSet2.add(2);
        testSet2.add(3);
        testSet2.add(4);

        let isSubset = isSubsetMock(testSet2);

        expect(isSubsetMock).toHaveBeenCalled();
        expect(isSubsetMock).toHaveBeenCalledWith(testSet2);
        expect(isSubset).toBe(false);
    });
});

describe('The "length" function of the DSSet class', () => {
    let testSet,
        lengthMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        lengthMock = jest.fn(() => testSet.length());
    });

    it('Returns the length of the set', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        let length = lengthMock();

        const actual = length;
        const expected = 3;

        expect(actual).toEqual(expected);
    });
});

describe('The "print" function of the DSSet class', () => {
    let testSet,
        printMock;
    
    beforeEach(() => {
        testSet = new DSSet();
        printMock = jest.fn(() => testSet.print());
    });

    it('Returns a printout of the set', () => {
        testSet.add(1);
        testSet.add(2);
        testSet.add(3);

        let printout = printMock();

        const actual = printout;
        const expected = '1 2 3';

        expect(actual).toEqual(expected);
    });

    it('Returns an empty string printout, for an empty set', () => {
        let printout = printMock();

        const actual = printout;
        const expected = '';

        expect(actual).toEqual(expected);
    });
});