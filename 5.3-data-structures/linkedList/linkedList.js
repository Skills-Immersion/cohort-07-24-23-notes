class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    // methods for nodes
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // methods
    // adding to front
    addToFront(value) {
        let newNode = new Node(value)
        if ( this.head === null ) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        return this
    }
    // finding
    //    H ->  {11 ->} {5 ->} 
    find(isMatch) { // (node, index) => node.value === 5
        let index = 0;
        let traversalNode = this.head;
        while ( traversalNode ) {
            // if we find what are looking for
            if ( isMatch(traversalNode, index) ) {
                return Node;
            }
            index++
            traversalNode = traversalNode.next
        }
    }
    // insert
    insert(value, isMatch) {
        if (this.head) { // if its not empty
            // determine where we want to insert
            let prevNode = this.find(isMatch);
            if (!prevNode) throw new Error("no node here, sorry boss");
            let newNode = new Node(value,prevNode.next);
            prevNode.next = newNode;
        } else {
            this.addToFront(value)// call if list is empty
        }
    }
    // remove from front
    removeFront() {
        if ( this.head ) {
            this.head = this.head.next;
        }
        return this;
    }

    remove(isMatch) {   
        if (this.head === null) {// List is empty
            return this;
        }

        // If head node matches what we are looking for
        if ( isMatch(this.head, 0)) {
            return this.removeFront();
        }

        //otherwise we need to traverse
        let index = 1;
        let previousNode = this.head;
        let currentNode = this.head.next;

        while (currentNode) {
            if ( isMatch(currentNode, index)) {
                previousNode.next = currentNode.next;
                return this;
            }
            // move to the next node
            previousNode = currentNode;
            currentNode = currentNode.next;
            index++
        }
        return this; // if the node was not found return the sll
    }
}

let sll = new LinkedList()
sll.addToFront(5).addToFront(11)
console.log(sll);