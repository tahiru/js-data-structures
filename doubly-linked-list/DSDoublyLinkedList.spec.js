
const DSDoublyLinkedList = require('./DSDoublyLinkedList');

describe('DSDoublyLinkedList', () => {
    describe('initialization', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('initializes a new doubly linked list, with the head and tail set to null', () => {
            expect(testDoublyLinkedList.head).toEqual(null);
            expect(testDoublyLinkedList.tail).toEqual(null);
            expect(testDoublyLinkedList.length()).toEqual(0);
        });
    });

    describe('add', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('can add a series of nodes to the doubly linked list', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            expect(testDoublyLinkedList.length()).toEqual(3);
        });
    });

    describe('remove', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('can remove a node from the singly linked list', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            expect(testDoublyLinkedList.length()).toEqual(3);
    
            testDoublyLinkedList.remove(1);
            expect(testDoublyLinkedList.length()).toEqual(2);
        });
    
        it('leaves the singly linked list\'s length unchanged, if the specified value for remova does not exist', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            expect(testDoublyLinkedList.length()).toEqual(3);
    
            testDoublyLinkedList.remove(4);
            expect(testDoublyLinkedList.length()).toEqual(3);
        });
    });

    describe('insert', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('inserts a node in the doubly linked list, after the specified node', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(3);
    
            expect(testDoublyLinkedList.length()).toEqual(2);
    
            testDoublyLinkedList.insert(2, 1);
            expect(testDoublyLinkedList.length()).toEqual(3);
            expect(testDoublyLinkedList.print()).toEqual('1 2 3');
        });
    });

    describe('traverse', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });
        
        it('can traverse the singly linked list from head to tail, taking an optional callback', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            let squareDataFromNode = jest.fn().mockImplementation((node) => {
                return (node.data * node.data);
            });
    
            let traverseWithSquareNumber = testDoublyLinkedList.traverse(squareDataFromNode);

            expect(squareDataFromNode).toHaveBeenCalled();
            expect(squareDataFromNode).toHaveBeenCalledTimes(3);
        });
    });

    describe('traverseReverse', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('can traverse the singly linked list from tail to head, taking an optional callback', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            let gatheredData = [];
            let gatherDataFromList = jest.fn().mockImplementation((node) => {
                gatheredData.push(node.data);
            });
    
            testDoublyLinkedList.traverseReverse(gatherDataFromList);
    
            expect(gatherDataFromList).toHaveBeenCalled();
            expect(gatherDataFromList).toHaveBeenCalledTimes(3);
    
            const actual = gatheredData;
            const expected = [3, 2, 1];
    
            expect(actual).toEqual(expected);
        });
    });

    describe('length', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('returns 0 for a newly created doubly linked list', () => {
            let length = testDoublyLinkedList.length();

            const actual = length;
            const expected = 0;
    
            expect(actual).toEqual(expected);
        });
    
        it('returns the length of the doubly linked list, for non-empty lists', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            let originalLength = testDoublyLinkedList.length();
            expect(originalLength).toEqual(3);
    
            testDoublyLinkedList.remove(3);
    
            let newLength = testDoublyLinkedList.length();
            expect(newLength).toEqual(2);
        });
    });

    describe('print', () => {
        let testDoublyLinkedList;

        beforeEach(() => {
            testDoublyLinkedList = new DSDoublyLinkedList();
        });

        it('returns a blank string for an empty singly linked list', () => {
            let print = testDoublyLinkedList.print();

            let actual = print;
            let expected = '';

            expect(actual).toEqual(expected);
        });
    
        it('prints the contents of the non-empty doubly linked list', () => {
            testDoublyLinkedList.add(1);
            testDoublyLinkedList.add(2);
            testDoublyLinkedList.add(3);
    
            let print = testDoublyLinkedList.print();

            expect(print).toEqual('1 2 3');
            expect(testDoublyLinkedList.length()).toEqual(3);
    
            testDoublyLinkedList.remove(3);
    
            print = testDoublyLinkedList.print();

            expect(print).toEqual('1 2');
            expect(testDoublyLinkedList.length()).toEqual(2);
    
            testDoublyLinkedList.insert(3, 2);
    
            print = testDoublyLinkedList.print();

            expect(print).toEqual('1 2 3');
            expect(testDoublyLinkedList.length()).toEqual(3);
        });
    });
});