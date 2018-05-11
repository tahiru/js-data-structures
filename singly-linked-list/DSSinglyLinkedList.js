
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DSSinglyLinkedList {
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
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }

    remove(data) {
        let previous = this.head;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                }

                if (current === this.tail) {
                    this.tail = previous;
                }

                previous.next = current.next;
                this.numberOfValues--;
            } else {
                previous = current;
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
                    this.tail.next = node;
                    this.tail = node;
                } else {
                    node.next = current.next;
                    current.next = node;
                }
                this.numberOfValues++;
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
}

module.exports = DSSinglyLinkedList;