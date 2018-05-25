
function DSStack() {
    this.stack = [];   
}

DSStack.prototype.push = function(value) {
    this.stack.push(value);
}

DSStack.prototype.pop = function() {
    return this.stack.pop();
}

DSStack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}

DSStack.prototype.length = function() {
    return this.stack.length;
}

DSStack.prototype.print = function() {
    return this.stack.join(' ').trim();
}

module.exports = DSStack;