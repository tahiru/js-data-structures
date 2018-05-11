
const DSDoublyLinkedList = require('./DSDoublyLinkedList');

describe('The DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        addMock,
        removeMock,
        insertMock,
        traverseMock,
        traverseReverseMock,
        lengthMock,
        printMock,
        printReverseMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
    });

    it('Initializes a new doubly linked list, with the head and tail set to null', () => {
        expect(testDoublyLinkedList.head).toEqual(null);
        expect(testDoublyLinkedList.tail).toEqual(null);
    });

    it('Has a function defined for adding nodes to the doubly linked list', () => {
        addMock = jest.fn((data) => testDoublyLinkedList.add(data));
        expect(addMock).toBeDefined();
    });

    it('Has a function defined for removing nodes from the doubly linked list', () => {
        removeMock = jest.fn((data) => testDoublyLinkedList.remove(data));
        expect(removeMock).toBeDefined();
    });

    it('Has a function defined for inserting a node at a certain location in the doubly linked list', () => {
        insertMock = jest.fn((data, toNodeData) => testDoublyLinkedList.insert(data, toNodeData));
        expect(insertMock).toBeDefined();
    });

    it('Has a function defined for traversing the doubly linked list', () => {
        traverseMock = jest.fn((callback) => testDoublyLinkedList.traverse(callback));
        expect(traverseMock).toBeDefined();
    });

    it('Has a function defined for traversing the doubly linked list in reverse', () => {
        traverseReverseMock = jest.fn((callback) => testDoublyLinkedList.traverseReverse(callback));
        expect(traverseReverseMock).toBeDefined();
    });

    it('Has a function defined for returning the length of a doubly linked list', () => {
        lengthMock = jest.fn(() => testDoublyLinkedList.length());
        expect(lengthMock).toBeDefined();
    });

    it('Has a function defined for printing a string representation of the doubly linked list', () => {
        printMock = jest.fn(() => testDoublyLinkedList.print());
        expect(printMock).toBeDefined();
    });

    it('Has a function defined for printing a string representation of the doubly linked list in reverse', () => {
        printReverseMock = jest.fn(() => testDoublyLinkedList.printReverse());
        expect(printReverseMock).toBeDefined();
    });
});

describe('The "add" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        addMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        addMock = jest.fn((data) => testDoublyLinkedList.add(data));
    });

    it('Can add a series of nodes to the doubly linked list', () => {
        addMock(1);
        addMock(2);
        addMock(3);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(3);
        expect(testDoublyLinkedList.length()).toEqual(3);
    });
});

describe('The "remove" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        removeMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        removeMock = jest.fn((data) => testDoublyLinkedList.remove(data));
    });

    it('Can remove a node from the singly linked list', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        expect(testDoublyLinkedList.length()).toEqual(3);

        testDoublyLinkedList.remove(1);
        expect(testDoublyLinkedList.length()).toEqual(2);
    });

    it('Leaves the singly linked list\'s length unchanged, if the specified value for remova does not exist', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        expect(testDoublyLinkedList.length()).toEqual(3);

        testDoublyLinkedList.remove(4);
        expect(testDoublyLinkedList.length()).toEqual(3);
    });
});

describe('The "insert" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        insertMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        insertMock = jest.fn((data, toNodeData) => testDoublyLinkedList.insert(data, toNodeData));
    });

    it('Inserts a node in the doubly linked list, after the specified node', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(3);

        expect(testDoublyLinkedList.length()).toEqual(2);

        testDoublyLinkedList.insert(2, 1);
        expect(testDoublyLinkedList.length()).toEqual(3);
        expect(testDoublyLinkedList.print()).toEqual('1 2 3');
    });
});

describe('The "traverse" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        traverseMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        traverseMock = jest.fn((callback) => testDoublyLinkedList.traverse(callback));
    });

    it('Can traverse the singly linked list from head to tail, taking an optional callback', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        let squareDataFromNode = jest.fn().mockImplementation((node) => {
            return (node.data * node.data);
        });

        let traverseWithoutCallback = traverseMock();
        expect(traverseMock).toHaveBeenCalled();

        let traverseWithSquareNumber = traverseMock(squareDataFromNode);
        expect(squareDataFromNode).toHaveBeenCalled();
        expect(squareDataFromNode).toHaveBeenCalledTimes(3);

    });
});

describe('The "traverseReverse" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        traverseReverseMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        traverseReverseMock = jest.fn((callback) => testDoublyLinkedList.traverseReverse(callback));
    });

    it('Can traverse the singly linked list from tail to head, taking an optional callback', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        let gatheredData = [];
        let gatherDataFromList = jest.fn().mockImplementation((node) => {
            gatheredData.push(node.data);
        });

        traverseReverseMock(gatherDataFromList);
        expect(traverseReverseMock).toHaveBeenCalled();

        expect(gatherDataFromList).toHaveBeenCalled();
        expect(gatherDataFromList).toHaveBeenCalledTimes(3);

        const actual = gatheredData;
        const expected = [3, 2, 1];

        expect(actual).toEqual(expected);
    });
});

describe('The "length" function of the DSDoublyLinkedList class', () => {
    let testDoublyLinkedList,
        lengthMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        lengthMock = jest.fn(() => testDoublyLinkedList.length());
    });

    it('returns 0 for a newly created doubly linked list', () => {
        let length = lengthMock();
        const actual = length;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    it('returns the length of the doubly linked list, for non-empty lists', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        let originalLength = lengthMock();
        expect(originalLength).toEqual(3);

        testDoublyLinkedList.remove(3);

        let newLength = lengthMock();
        expect(newLength).toEqual(2);
    });
});

describe('The "print" function of the DSSinglyLinkedList class', () => {
    let testDoublyLinkedList,
        printMock;
    
    beforeEach(() => {
        testDoublyLinkedList = new DSDoublyLinkedList();
        printMock = jest.fn(() => testDoublyLinkedList.print());
    });

    it('Returns a blank string for an empty singly linked list', () => {
        let print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('');
        expect(testDoublyLinkedList.length()).toEqual(0);
    });

    it('prints the contents of the non-empty doubly linked list', () => {
        testDoublyLinkedList.add(1);
        testDoublyLinkedList.add(2);
        testDoublyLinkedList.add(3);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2 3');
        expect(testDoublyLinkedList.length()).toEqual(3);

        testDoublyLinkedList.remove(3);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2');
        expect(testDoublyLinkedList.length()).toEqual(2);

        testDoublyLinkedList.insert(3, 2);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2 3');
        expect(testDoublyLinkedList.length()).toEqual(3);
    });
});