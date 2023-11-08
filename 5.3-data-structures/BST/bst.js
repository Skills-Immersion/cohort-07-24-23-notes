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
        if ( this.key === null ) {
            this.key === key;
            this.value === value;
        } else if ( key < this.key ) { // check if we need to go left
            // check if we cant go left aka new node belongs here
            if ( !this.left ) {
                this.left = new BST(key, value, this);
            } else {
                this.left.insert(key, value);
            }
        } else { //check right
            if ( !this.right ) {
                this.right = new BST(key, value, this);
            } else {
                this.right.insert(key, value);
            }
        }
        return this;
    }
}

let bst = new BST(11,11)
bst.insert(7,7).insert(13,13).insert(5,5)
console.log(bst);
