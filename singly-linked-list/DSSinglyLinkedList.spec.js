
const DSSinglyLinkedList = require('./DSSinglyLinkedList');

describe('The DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        addMock,
        removeMock,
        insertMock,
        traverseMock,
        lengthMock,
        printMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
    });

    it('Initializes a new object with both the head and tail defaulting to null', () => {
        expect(testSinglyLinkedList.head).toEqual(null);
        expect(testSinglyLinkedList.tail).toEqual(null);
        expect(testSinglyLinkedList.numberOfValues).toEqual(0);
    });

    it('Has a function defined for adding nodes to the singly linked list', () => {
        addMock = jest.fn((data) => testSinglyLinkedList.add(data));
        expect(addMock).toBeDefined();
    });

    it('Has a function defined to removing nodes from the singly linked list', () => {
        removeMock = jest.fn((data) => testSinglyLinkedList.remove(data));
        expect(removeMock).toBeDefined();
    });

    it('Has a function defined to inserting a node at a certain location in the singly linked list', () => {
        insertMock = jest.fn((data, toNodeData) => testSinglyLinkedList.insert(data, toNodeData));
        expect(insertMock).toBeDefined();
    });

    it('Has a function defined to traverse a singly linked list, with an optional callback', () => {
        traverseMock = jest.fn((callback) => testSinglyLinkedList.traverse(callback));
        expect(traverseMock).toBeDefined();
    });

    it('Has a function defined to determine the length of the singly linked list', () => {
        lengthMock = jest.fn(() => testSinglyLinkedList.length());
        expect(lengthMock).toBeDefined();
    });

    it('Has a function defined to print out a string representation of the singly linked list', () => {
        printMock = jest.fn(() => testSinglyLinkedList.print());
        expect(printMock).toBeDefined();
    });
});

describe('The "add" function of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        addMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        addMock = jest.fn((data) => testSinglyLinkedList.add(data));
    });

    it('Can add a series of nodes to the singly linked list', () => {
        addMock(1);
        addMock(2);
        addMock(3);

        expect(addMock).toHaveBeenCalled();
        expect(addMock).toHaveBeenCalledTimes(3);
        expect(testSinglyLinkedList.length()).toEqual(3);
    });
});

describe('The "remove" function of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        removeMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        removeMock = jest.fn((data) => testSinglyLinkedList.remove(data));
    });

    it('Can remove a node from the singly linked list', () => {
        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(2);
        testSinglyLinkedList.add(3);

        expect(testSinglyLinkedList.length()).toEqual(3);

        testSinglyLinkedList.remove(1);
        expect(testSinglyLinkedList.length()).toEqual(2);
    });

    it('Leaves the singly linked list\'s length unchanged, if the specified value for remova does not exist', () => {
        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(2);
        testSinglyLinkedList.add(3);

        expect(testSinglyLinkedList.length()).toEqual(3);

        testSinglyLinkedList.remove(4);
        expect(testSinglyLinkedList.length()).toEqual(3);
    });
});

describe('The "insert" function of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        insertMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        insertMock = jest.fn((data, toNodeData) => testSinglyLinkedList.insert(data, toNodeData));
    });

    it('Inserts a node in the singly linked list, after the specified node', () => {
        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(3);

        expect(testSinglyLinkedList.length()).toEqual(2);

        testSinglyLinkedList.insert(2, 1);
        expect(testSinglyLinkedList.length()).toEqual(3);
        expect(testSinglyLinkedList.print()).toEqual('1 2 3');
    });
});

describe('The "traverse" function of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        traverseMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        traverseMock = jest.fn((callback) => testSinglyLinkedList.traverse(callback));
    });

    it('Can traverse the singly linked list from head to tail, taking an optional callback', () => {
        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(2);
        testSinglyLinkedList.add(3);

        let squareDataFromNode = jest.fn().mockImplementation((node) => {
            return (node.data * node.data);
        });

        let traverseWithoutCallback = traverseMock();
        expect(traverseMock).toHaveBeenCalled();

        let traverseWithSquareNumber = traverseMock(squareDataFromNode);
        expect(squareDataFromNode).toHaveBeenCalled();
        expect(squareDataFromNode).toHaveBeenCalledTimes(3);
        expect(squareDataFromNode).toHaveBeenLastCalledWith({ data: 3, next: null });
    });
});

describe('The "length" function of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        lengthMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        lengthMock = jest.fn(() => testSinglyLinkedList.length());
    });

    it('Returns 0 for a newly created singly linked list', () => {
        let length = lengthMock();
        const actual = length;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    it('Returns the length of the singly linked list, for non-empty lists', () => {
        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(2);
        testSinglyLinkedList.add(3);

        let originalLength = lengthMock();
        expect(originalLength).toEqual(3);

        testSinglyLinkedList.remove(3);
        
        let newLength = lengthMock();
        expect(newLength).toEqual(2);
    });
});

describe('The "print" method of the DSSinglyLinkedList class', () => {
    let testSinglyLinkedList,
        printMock;
    
    beforeEach(() => {
        testSinglyLinkedList = new DSSinglyLinkedList();
        printMock = jest.fn(() => testSinglyLinkedList.print());
    });

    it('Returns a blank string for an empty singly linked list', () => {
        let print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('');
        expect(testSinglyLinkedList.length()).toEqual(0);

        testSinglyLinkedList.add(1);
        testSinglyLinkedList.add(2);
        testSinglyLinkedList.add(3);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2 3');
        expect(testSinglyLinkedList.length()).toEqual(3);

        testSinglyLinkedList.remove(3);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2');
        expect(testSinglyLinkedList.length()).toEqual(2);

        testSinglyLinkedList.insert(3, 2);

        print = printMock();
        expect(printMock).toHaveBeenCalled();
        expect(print).toEqual('1 2 3');
        expect(testSinglyLinkedList.length()).toEqual(3);
    });
});