
function Node(data) {
    this.data = data;
    this.next = null;
}

function DSSinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
}

DSSinglyLinkedList.prototype.add = function(data) {
    let node = new Node(data);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.numberOfValues += 1;
}

DSSinglyLinkedList.prototype.remove = function(data) {
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
            this.numberOfValues -= 1;
        } else {
            previous = current;
        }
        current = current.next;
    }
}

DSSinglyLinkedList.prototype.insert = function(data, toNodeData) {
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
            this.numberOfValues += 1;
        }
        current = current.next;
    }
}

DSSinglyLinkedList.prototype.traverse = function(callback) {
    let current = this.head;

    while (current) {
        if (callback) {
            callback(current);
        }
        current = current.next;
    }
}

DSSinglyLinkedList.prototype.length = function() {
    return this.numberOfValues;
}

DSSinglyLinkedList.prototype.print = function() {
    let string = '';
    let current = this.head;

    while (current) {
        string += `${current.data} `;
        current = current.next;
    }
    return string.trim();
}

module.exports = DSSinglyLinkedList;