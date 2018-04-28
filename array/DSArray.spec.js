
const DSArray = require('./DSArray');

describe('The DSArray class', () => {
    let testArray,
        addMock,
        removeMock,
        searchMock,
        indexMock,
        lengthMock,
        printMock;

    beforeEach(() => {
        testArray = new DSArray();
    });

    it('Initializes a new object with an empty array', () => {
        expect(testArray.array).toEqual([]);
        expect(testArray.length()).toEqual(0);
    });

    it('Has a function defined for adding elements', () => {
        addMock = jest.fn((element) => testArray.add(element));
        expect(addMock).toBeDefined();
    });

    it('Has a function defined for removing elements', () => {
        removeMock = jest.fn((element) => testArray.remove(element));
        expect(removeMock).toBeDefined();
    });

    it('Has a function defined for searching for elements', () => {
        searchMock = jest.fn((element) => testArray.search(element));
        expect(searchMock).toBeDefined();
    });

    it('Has a function defined for returning an element at a certain index', () => {
        indexMock = jest.fn((element) => testArray.index(element));
        expect(indexMock).toBeDefined();
    });

    it('Has a function defined for determining the length of the array', () => {
        lengthMock = jest.fn(() => testArray.length());
        expect(lengthMock).toBeDefined();
    });

    it('Has a function defined for printing the elements of the array', () => {
        printMock = jest.fn(() => testArray.print());
        expect(printMock).toBeDefined();
    });
});

describe('The "add" function for the DSArray class', () => {
    let testArray,
        addMock;

    beforeEach(() => {
        testArray = new DSArray();
        addMock = jest.fn((element) => testArray.add(element));
    });

    it('Can add alements to the array', () => {
        addMock(1);

        expect(addMock).toBeCalled();
        expect(addMock).toBeCalledWith(1);
        expect(testArray.length()).toEqual(1);
    });
});

describe('The "remove" function for the DSArray class', () => {
    let testArray,
        removeMock;

    beforeEach(() => {
        testArray = new DSArray();
        removeMock = jest.fn((element) => testArray.remove(element));
    });

    it('Can remove elements from the array', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        removeMock(1);

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledWith(1);
        expect(testArray.length()).toEqual(2);
    });

    it('Returns the array unchanged if the element was not found', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        removeMock(4);

        expect(removeMock).toHaveBeenCalled();
        expect(removeMock).toHaveBeenCalledWith(4);
        expect(testArray.length()).toEqual(3);
    });
});

describe('The "search" function of the DSArray class', () => {
    let testArray,
        searchMock;
    
    beforeEach(() => {
        testArray = new DSArray();
        searchMock = jest.fn((element) => testArray.search(element));
    });

    it('Can search for elements in the array, returning the index if found', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let search = searchMock(1);

        const actual = search;
        const expected = 0;

        expect(searchMock).toHaveBeenCalled();
        expect(searchMock).toHaveBeenCalledWith(1);
        expect(actual).toEqual(expected);
    });

    it('Can search for elements in the array, returning null if not found', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let search = searchMock(4);

        const actual = search;
        const expected = null;

        expect(searchMock).toHaveBeenCalled();
        expect(searchMock).toHaveBeenCalledWith(4);
        expect(actual).toEqual(expected);
    });
});

describe('The "index" function of the DSArray class', () => {
    let testArray,
        indexMock;
    
    beforeEach(() => {
        testArray = new DSArray();
        indexMock = jest.fn((element) => testArray.index(element));
    });

    it('Can get the element at an index, returning the element at the index if found', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let indexedElement = indexMock(2);

        const actual = indexedElement;
        const expected = 3;

        expect(indexMock).toHaveBeenCalled();
        expect(indexMock).toHaveBeenCalledWith(2);
        expect(actual).toEqual(expected);
    });

    it('Can get the element at the index, returning null if not found', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let indexedElement = indexMock(3);

        const actual = indexedElement;
        const expected = null;

        expect(indexMock).toHaveBeenCalled();
        expect(indexMock).toHaveBeenCalledWith(3);
        expect(actual).toEqual(expected);
    });
});

describe('The "length" function of the DSArray class', () => {
    let testArray,
        lengthMock;
    
    beforeEach(() => {
        testArray = new DSArray();
        lengthMock = jest.fn(() => testArray.length());
    });

    it('Returns the length of the array', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let length = lengthMock();

        const actual = length;
        const expected = 3;

        expect(lengthMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });
});

describe('The "print" function of the DSArray class', () => {
    let testArray,
        printMock;
    
    beforeEach(() => {
        testArray = new DSArray();
        printMock = jest.fn(() => testArray.print());
    });

    it('Prints an empty string if the array is empty', () => {
        let printed = printMock();

        const actual = printed;
        const expected = '';

        expect(printMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });

    it('Prints a string representation of the array, delimited by spaces', () => {
        testArray.add(1);
        testArray.add(2);
        testArray.add(3);
        let printed = printMock();

        const actual = printed;
        const expected = '1 2 3';

        expect(printMock).toHaveBeenCalled();
        expect(actual).toEqual(expected);
    });
});