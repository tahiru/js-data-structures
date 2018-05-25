
function DSQueue() {
    this.queue = [];
}

DSQueue.prototype.enqueue = function(data) {
    this.queue.push(data);
}

DSQueue.prototype.dequeue = function() {
    return this.queue.shift();
}

DSQueue.prototype.peek = function() {
    return this.queue[0];
}

DSQueue.prototype.length = function() {
    return this.queue.length;
}

DSQueue.prototype.print = function() {
    return this.queue.join(' ').trim();
}

module.exports = DSQueue;