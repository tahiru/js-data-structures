
class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DSDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues += 1;
    }

    remove(data) {
        let current = this.head;
        
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.numberOfValues -= 1;
            }
            current = current.next;
        }
    }

    insert(data, toNodeData) {
        let current = this.head;

        while (current) {
            if (current.data === toNodeData) {
                let node = new Node(data);

                if (current === this.tail) {
                    this.add(data);
                } else {
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.numberOfValues += 1;
                }
            }
            current = current.next;
        }
    }

    traverse(callback) {
        let current = this.head;

        while (current) {
            if (callback) {
                callback(current);
            }
            current = current.next;
        }
    }

    traverseReverse(callback) {
        let current = this.tail;

        while (current) {
            if (callback) {
                callback(current);
            }
            current = current.previous;
        }
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        let string = '';
        let current = this.head;

        while (current) {
            string += `${current.data} `;
            current = current.next;
        }
        return string.trim();
    }

    printReverse() {
        let string = '';
        let current = this.tail;

        while (current) {
            string += `${current.data} `;
            current = current.previous;
        }
        return string.trim();
    }
}

module.exports = DSDoublyLinkedList;