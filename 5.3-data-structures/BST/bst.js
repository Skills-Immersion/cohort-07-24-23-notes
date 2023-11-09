const Queue = require("../queue/queue")

class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // check if the tree is empty
        if (this.key === null) { // making a root node
            this.key = key;
            this.value = value;
        } else if (key < this.key) { // check if we need to go left
            // check if we cant go left
            if (this.left === null) {
                // we need to set new node here
                this.left = new BST(key, value, this);
            } else {
                // there is a left child
                this.left.insert(key, value);
            }
        } else { //check right
            if (this.right === null) {
                this.right = new BST(key, value, this);
            } else {
                this.right.insert(key, value);
            }
        }
        return this;
    }

    find(key) {
        // is this the node we are looking for
        if (key === this.key) {
            return [this.key, this.value];
        } else if (key < this.key && this.left) { // do i need to go left and can i go left
            return this.left.find(key);
        } else if (key > this.key && this.right) {
            return this.right.find(key);
        } else {
            return null;
        }
    }

    remove(keyToRemove) {
        // is this the node i want to remove
        if (keyToRemove === this.key) {
            // check if has two children
            if (this.left && this.right) {
                // find the minimum on the right side
                let nodeToPromote = this.right._findMin();
                // Replace current node's key and value with that of nodeToPromote
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.value;
                // Remove the nodeToPromote since it's key and value have been copied
                // Since nodeToPromote is the minimum, it will have no left child
                // If it has a right child, that child will take nodeToPromote's place
                nodeToPromote.remove(nodeToPromote.key);
            } else if (this.left) {
                this._replaceWith(this.left);
            } else if (this.right) {
                this._replaceWith(this.right);
            } else {
                this._replaceWith(null);
            }
        } else if (keyToRemove < this.key && this.left) {
            return this.left.remove(keyToRemove);
        } else if (keyToRemove > this.key && this.right) {
            return this.right.remove(keyToRemove);
        } else {
            return null;
        }
    }

    _replaceWith(replacementNode) { //  
        // the logic for removing nodes
        // check the node we are replacings parent
        if (this.parent) {
            // current node to be replaced we need to find what side from the parents perspective
            if (this.parent.left === this) {
                // tell the parent to replace it with the node we were given
                this.parent.left = replacementNode;
            } else if (this.parent.right === this) {
                this.parent.right = replacementNode;
            }
            // replace the replacements node parent refrence LOOK DEBUGGER
            if (replacementNode) {
                replacementNode.parent = this.parent
            }
        } else { // if it is a root node
            if (replacementNode) {
                this.key = replacementNode.key;
                this.value = replacementNode.value;
                this.left = replacementNode.left;
                this.right = replacementNode.right;
            } else { // reset tree
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    //find min helper
    _findMin() {
        if (!this.left) { // if i cant go left aka left is null
            return this; //return me that node
        }
        return this.left._findMin(); // keep traversing right recursively
    }

    //find max helper
    _findMax() {
        if (!this.right) { // if i cant go right aka right is null
            return this; //return me that node
        }
        return this.right._findMax(); // keep traversing left recursively
    }

    print(node = this, prefix = '', isLeft = true) {
        if (node.right !== null) {
            this.print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`);
        if (node.left !== null) {
            this.print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    //pre order we push the root node first
    dfsPreOrder(values = []) {
        //process
        values.push(this.value);
        //step left recursively
        if (this.left) {
            this.left.dfsPreOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPreOrder(values);
        }
        return values
    }

    //post order we push the root node at the end
    dfsPostOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        //process
        values.push(this.value);
        return values
    }

    //traversal that gives us our tree sorted
    dfsInOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsInOrder(values);
        }
        //process
        values.push(this.value);
        //step right recursively
        if (this.right) {
            this.right.dfsInOrder(values);
        }
        return values
    }

    breadtFirstSearch(values = []) {
        //initialize the Queue
        const queue = new Queue();
        queue.enqueue(this)// put the root node into the Q
        let nodeToBechecked = this;


        while ( nodeToBechecked ) {
            // traverse
            values.push(nodeToBechecked.value);
            // check the left child and put it in Queue
            if ( nodeToBechecked.left ) {
                queue.enqueue(nodeToBechecked.left)
            }
            // check the right child and put it in Queue
            if ( nodeToBechecked.right ) {
                queue.enqueue(nodeToBechecked.right)
            }
            // move on to the next node
            nodeToBechecked = queue.dequeue();
        }
        return values;
    }
}

let bst = new BST()
bst.insert(4,4).insert(2,2).insert(1,1).insert(3,3).insert(6,6).insert(5,5).insert(7,7)
bst.print();

/*
        4
    2       6
  1   3   5   7
*/