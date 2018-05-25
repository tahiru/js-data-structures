
const DSStack = require('./DSStack');

describe('The DSStack class', () => {
    describe('initialization', () => {
        let testStack;
    
        beforeEach(() => {
            testStack = new DSStack();
        });

        it('initializes a new object, with an empty stack', () => {
            expect(testStack.length()).toEqual(0);
        });
    });

    describe('push', () => {
        let testStack;
    
        beforeEach(() => {
            testStack = new DSStack();
        });

        it('pushes an element onto the stack', () => {
            testStack.push(1);

            const actual = testStack.peek();
            const expected = 1;

            expect(actual).toEqual(expected);
            expect(testStack.length()).toEqual(1);
        });

        it('can push multiple elements onto the stack, in First-In, First-Out order', () => {
            testStack.push(1);
            testStack.push(2);
            testStack.push(3);

            const actual = testStack.peek();
            const expected = 3;

            expect(actual).toEqual(expected);
            expect(testStack.length()).toEqual(3);
        });
    });

    describe('pop', () => {
        let testStack;

        beforeEach(() => {
            testStack = new DSStack();
        });

        it('pops elements off the stack', () => {
            testStack.push(1);
            let popped = testStack.pop();

            const actual = popped;
            const expected = 1;

            expect(actual).toEqual(expected);
            expect(testStack.length()).toEqual(0);
        });

        it('can pop multiple elements off the stack, in First-In, First-Out order', () => {
            testStack.push(1);
            testStack.push(2);
            testStack.push(3);

            let popped = testStack.pop();

            let actual = popped;
            let expected = 3;

            expect(actual).toEqual(expected);
            expect(testStack.peek()).toEqual(2);

            popped = testStack.pop();

            actual = popped;
            expected = 2;

            expect(actual).toEqual(expected);
            expect(testStack.peek()).toEqual(1);

            popped = testStack.pop();

            actual = popped;
            expected = 1;

            expect(actual).toEqual(expected);
            expect(testStack.peek()).toEqual(undefined);
        });
    });

    describe('peek', () => {
        let testStack;
    
        beforeEach(() => {
            testStack = new DSStack();
        });

        it('returns the top-most element of the stack, without removing it', () => {
            testStack.push(1);

            let peeked = testStack.peek();

            const actual = peeked;
            const expected = 1;

            expect(actual).toEqual(expected);
            expect(testStack.length()).toEqual(1);
        });
    });

    describe('length', () => {
        let testStack;
    
        beforeEach(() => {
            testStack = new DSStack();
        });

        it('initially starts out with a length of 0', () => {
            expect(testStack.length()).toEqual(0);
        });

        it('returns the length of the stack', () => {
            testStack.push(1);
            testStack.push(2);
            testStack.push(3);

            let length = testStack.length();

            const actual = length;
            const expected = 3;

            expect(actual).toEqual(expected);
        });
    });

    describe('print', () => {
        let testStack;
    
        beforeEach(() => {
            testStack = new DSStack();
        });

        it('returns an empty string, for a newly initialized stack', () => {
            let printed = testStack.print();

            const actual = printed;
            const expected = '';

            expect(actual).toEqual(expected);
        });

        it('returns a string with the elements of the stack', () => {
            testStack.push(1);
            testStack.push(2);
            testStack.push(3);

            let printed = testStack.print();

            let actual = printed;
            let expected = '1 2 3';

            expect(actual).toEqual(expected);

            testStack.pop();

            printed = testStack.print();

            actual = printed;
            expected = '1 2';

            expect(actual).toEqual(expected);
        });
    });
});