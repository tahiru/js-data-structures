
class DSStack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    length() {
        return this.stack.length;
    }

    print() {
        return this.stack.join(' ').trim();
    }
}

module.exports = DSStack;