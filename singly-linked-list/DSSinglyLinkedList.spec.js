
const DSSinglyLinkedList = require('./DSSinglyLinkedList');

describe('DSSinglyLinkedList', () => {
    describe('initialization', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('initializes a new object with both the head and tail defaulting to null', () => {
            expect(testSinglyLinkedList.head).toEqual(null);
            expect(testSinglyLinkedList.tail).toEqual(null);
            expect(testSinglyLinkedList.length()).toEqual(0);
        });
    });

    describe('add', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('can add a series of nodes to the singly linked list', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);

            expect(testSinglyLinkedList.length()).toEqual(3);
        });
    });

    describe('remove', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('can remove a node from the singly linked list', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);
    
            expect(testSinglyLinkedList.length()).toEqual(3);
    
            testSinglyLinkedList.remove(1);
            expect(testSinglyLinkedList.length()).toEqual(2);
        });
    
        it('leaves the singly linked list\'s length unchanged, if the specified value for removal does not exist', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);
    
            expect(testSinglyLinkedList.length()).toEqual(3);
    
            testSinglyLinkedList.remove(4);
            expect(testSinglyLinkedList.length()).toEqual(3);
        });
    });

    describe('insert', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('inserts a node in the singly linked list, after the specified node', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(3);
    
            expect(testSinglyLinkedList.length()).toEqual(2);
    
            testSinglyLinkedList.insert(2, 1);
            expect(testSinglyLinkedList.length()).toEqual(3);
        });
    });

    describe('traverse', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('can traverse the singly linked list from head to tail, taking an optional callback', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);
    
            let squareDataFromNode = jest.fn().mockImplementation((node) => {
                return (node.data * node.data);
            });
    
            let traverseWithSquareNumber = testSinglyLinkedList.traverse(squareDataFromNode);

            expect(squareDataFromNode).toHaveBeenCalled();
            expect(squareDataFromNode).toHaveBeenCalledTimes(3);
            expect(squareDataFromNode).toHaveBeenLastCalledWith({ data: 3, next: null });
        });
    });

    describe('length', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('returns 0 for a newly created singly linked list', () => {
            let length = testSinglyLinkedList.length();
            const actual = length;
            const expected = 0;
    
            expect(actual).toEqual(expected);
        });
    
        it('returns the length of the singly linked list, for non-empty lists', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);
    
            let originalLength = testSinglyLinkedList.length();
            expect(originalLength).toEqual(3);
    
            testSinglyLinkedList.remove(3);
            
            let newLength = testSinglyLinkedList.length();
            expect(newLength).toEqual(2);
        });
    });

    describe('print', () => {
        let testSinglyLinkedList;

        beforeEach(() => {
            testSinglyLinkedList = new DSSinglyLinkedList();
        });

        it('returns a blank string for an empty singly linked list', () => {
            let printed = testSinglyLinkedList.print();
            
            const actual = printed;
            const expected = '';

            expect(actual).toEqual(expected);
        });
        
        it('prints out a non-empty singly linked list', () => {
            testSinglyLinkedList.add(1);
            testSinglyLinkedList.add(2);
            testSinglyLinkedList.add(3);

            let print = testSinglyLinkedList.print();

            expect(print).toEqual('1 2 3');
            expect(testSinglyLinkedList.length()).toEqual(3);

            testSinglyLinkedList.remove(3);

            print = testSinglyLinkedList.print();

            expect(print).toEqual('1 2');
            expect(testSinglyLinkedList.length()).toEqual(2);
        });
    });
});