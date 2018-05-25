
const DSQueue = require('./DSQueue');

describe('DSQueue', () => {
    describe('initialization', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('initializes a new object, with an empty queue', () => {
            expect(testQueue.length()).toEqual(0);
        });
    });

    describe('enqueue', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('enqueues an element onto the queue', () => {
            testQueue.enqueue(1);

            const actual = testQueue.peek();
            const expected = 1;

            expect(actual).toEqual(expected);
            expect(testQueue.length()).toEqual(1);
        });

        it('can enqueue multiple elements onto the queue, in a First-In, First-Out order', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            const actual = testQueue.peek();
            const expected = 1;

            expect(actual).toEqual(expected);
            expect(testQueue.length()).toEqual(3);
        });
    });

    describe('dequeue', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('dequeues an element off the queue', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            let actual = testQueue.peek();
            let expected = 1;

            expect(actual).toEqual(expected);

            testQueue.dequeue();

            actual = testQueue.peek();
            expected = 2;

            expect(actual).toEqual(expected);
        });

        it('can dequeue multiple elements off the stack, in First-In, First-Out order', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            let actual = testQueue.peek();
            let expected = 1;

            expect(actual).toEqual(expected);

            testQueue.dequeue();
            testQueue.dequeue();

            actual = testQueue.peek();
            expected = 3;

            expect(actual).toEqual(expected);
        });
    });

    describe('peek', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('returns the top-most element of the queue, without removing it', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            let peeked = testQueue.peek();

            const actual = peeked;
            const expected = 1;

            expect(actual).toEqual(expected);
        });
    });

    describe('length', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('initially starts out with a length of 0', () => {
            expect(testQueue.length()).toEqual(0);
        });

        it('returns the length of the queue', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            let length = testQueue.length();

            let actual = length;
            let expected = 3;

            expect(actual).toEqual(expected);

            testQueue.dequeue();

            length = testQueue.length();

            actual = length;
            expected = 2;

            expect(actual).toEqual(expected);
        });
    });

    describe('print', () => {
        let testQueue;

        beforeEach(() => {
            testQueue = new DSQueue();
        });

        it('returns an empty string, for a newly initialized queue', () => {
            let printed = testQueue.print();

            const actual = printed;
            const expected = '';

            expect(actual).toEqual(expected);
        });

        it('returns a string with the elements of the stack', () => {
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);

            let printed = testQueue.print();

            let actual = printed;
            let expected = '1 2 3';

            expect(actual).toEqual(expected);

            testQueue.dequeue();

            printed = testQueue.print();

            actual = printed;
            expected = '2 3';

            expect(actual).toEqual(expected);
        });
    });
});