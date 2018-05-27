
const DSTree = require('./DSTree');

describe('DSTree', () => {
    describe('initialization', () => {
        let testTree;

        beforeEach(() => {
            testTree = new DSTree();
        });

        it('initializes an empty tree, with a null root node', () => {
            expect(testTree.root).toEqual(null);
            expect(testTree.print()).toEqual('No root node found');
        });
    });

    // describe('add', () => {
    //     let testTree;

    //     beforeEach(() => {
    //         testTree = new DSTree();
    //     });
    // });
});