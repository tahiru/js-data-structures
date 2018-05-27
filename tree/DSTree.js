
function Node(data) {
    this.data = data;
    this.children = [];
}

function DSTree() {
    this.root = null;
}

DSTree.prototype.findBFS = function(data) {
    var queue = [this.root];

    while (queue.length) {
        var node = queue.shift();

        if (node.data === data) {
            return node;
        }

        for (var i = 0; i < node.children.length; i += 1) {
            queue.push(node.children[i]);
        }
    }
    return null;
};

DSTree.prototype.contains = function(data) {
    return this.findBFS(data) ? true : false;
};

DSTree.prototype.add = function(data, toNodeData) {
    var node = new Node(data);
    var parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
        parent.children.push(node);
    } else {
        if (!this.root) {
            this.root = node;
        } else {
            return null;
        }
    }
};

DSTree.prototype.remove = function(data) {
    if (this.root.data === data) {
        this.root = null;
    }

    var queue = [this.root];

    while (queue.length) {
        var node = queue.shift();

        for (var i = 0; i < node.children.length; i += 1) {
            if (node.children[i].data === data) {
                node.children.splice(i, 1);
            } else {
                queue.push(node.children[i]);
            }
        }
    }
};

DSTree.prototype._preOrder = function(node, callback) {
    if (node) {
        if (callback) {
            callback(node);
        }

        for (var i = 0; i < node.children.length; i += 1) {
            this._preOrder(node.children[i], callback);
        } 
    }
}

DSTree.prototype._postOrder = function(node, callback) {
    if (node) {
        for (var i = 0; i < node.children.length; i += 1) {
            this._postOrder(node.children[i], callback);
        }

        if (callback) {
            callback(node);
        }
    }
};

DSTree.prototype.traverseDFS = function(callback, method) {
    var current = this.root;

    if (method) {
        this['_' + method](current, callback);
    } else {
        this._preOrder(current, callback);
    }
};

DSTree.prototype.traverseBFS = function(callback) {
    var queue = [this.root];

    while (queue.length) {
        var node = queue.shift();

        if (callback) {
            callback(node);
        }

        for (var i = 0; i < node.children.length; i += 1) {
            queue.push(node.children[i]);
        }
    }
};

DSTree.prototype.print = function() {
    if (!this.root) {
        return 'No root node found';
    }

    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';

    while (queue.length) {
        var node = queue.shift();

        string += node.data.toString() + ' ';

        if (node === newline && queue.length) {
            queue.push(newline);
        }

        for (var i = 0; i < node.children.length; node += 1) {
            queue.push(node.children[i]);
        }
    }
    return (string.slice(0, -2).trim());
};

DSTree.prototype.printByLevel = function() {
    if (!this.root) {
        return 'No root node found';
    }

    var newline = new node('\n');
    var queue = [this.root, newline];
    var string = '';

    while (queue.length) {
        var node = queue.shift();

        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');

        if (node === newline && queue.length) {
            queue.push(newline);
        }

        for (var i = 0; i < node.children.length; i += 1) {
            queue.push(node.children[i]);
        }
    }
    return string.trim();
};

module.exports = DSTree;