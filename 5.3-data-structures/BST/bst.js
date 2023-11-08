class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(keyToInsert, valueToInsert) {
        // check if the tree is empty
        if ( this.key === null ) {
            this.key === keyToInsert;
            this.value === valueToInsert;
        } else if ( keyToInsert < this.key ) { // check if we need to go left
            // check if we cant go left aka new node belongs here
            if ( !this.left ) {
                this.left = new BST(keyToInsert, valueToInsert, this);
            } else {
                this.left.insert(keyToInsert, valueToInsert);
            }
        } else { //check right
            if ( !this.right ) {
                this.right = new BST(keyToInsert, valueToInsert, this);
            } else {
                this.right.insert(keyToInsert, valueToInsert);
            }
        }
        return this;
    }

    find(keyToLookFor) {
        // did i find the key
        if ( this.key === keyToLookFor ) {
            return [this.key, this.value];
        } else if ( keyToLookFor < this.key && this.left  ) { // do i need to go left and can i go left
            return this.left.find(keyToLookFor)
        } else if ( keyToLookFor > this.key && this.right ) {
            return this.right.find(keyToLookFor)
        } else {
            return null
        }
    }

    remove(keyToRemove) {
        // is this node i want to remove
        if ( this.key === keyToRemove ) {
            // check if it has two children
            if ( this.left && this.right ) {
                // we need to find a node to promote
                let nodeToPromote = this.right._findMin();
                // let nodeToPromote = this.left._findMax();
                // find min on right or find largest on left
                // change the node
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.value;
                // then remove extra node
                nodeToPromote.remove(nodeToPromote.key);
            } else if ( this.left ) {
                // replace with my left child
                this._replaceWith(this.left)
            } else if ( this.right ) {
                // replace with my right child
                this._replaceWith(this.right)
            } else {
                // replace leaf node with null
                this._replaceWith(null)
            }
        } else if ( keyToRemove < this.key && this.left ) { // traverse
            return this.left.remove(keyToRemove);
        } else if ( keyToRemove > this.key && this.right ) {
            return this.right.remove(keyToRemove)
        } else {
            return null;
        }
    }
}

let bst = new BST(5,5)
bst.insert(0,0).insert(1,1).insert(2,2).insert(3,3).insert(4,4).insert(6,6).insert(7,7).insert(8,8).insert(9,9)
bst.remove(0);
