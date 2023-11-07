/*
A queue is a data structure that stores a collection of elements and follows the First In First Out (FIFO) principle. 
This means that the first element added to the queue will be the first one to be removed.

Here is a simple text diagram of a queue:
|_|  <--- Front of queue
|_|
|_|
|_|
|_|  <--- Rear of queue

Each box in the diagram represents an element in the queue. The front of the queue is the end where elements are removed, 
and the rear of the queue is where elements are added.

Operations that can be performed on a queue include:

enqueue: adding an element to the rear of the queue
dequeue: removing the front element from the queue
peek: looking at the front element of the queue without removing it
isEmpty: checking if the queue is empty
For example, if we perform the following operations on an empty queue:

enqueue(1)
enqueue(2)
enqueue(3)

would give us
|1|  <--- Front of queue
|2|
|3|  <--- Rear of queue

dequeue()
would give us
|2|  <--- Front of queue
|3|  <--- Rear of queue
*/

// Queue
// First In First Out (FIFO)

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue
    enqueue(value) {
        // create new node 
        let newNode = new Node(value);
        if ( this.head === null ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode // last node welcomes us in
            this.tail = newNode
        }
        return this
    }
    // dequeue
    dequeue() {
        if (!this.head) {
            return;
        }
        let dequeued = this.head;
        this.head = this.head.next; //update our head pointer
        // if the node we are removing is the only thing
        if ( this.head === this.tail ) {
           this.tail = null; 
        }

        return dequeued;
    }
}

let q = new Queue()
q.enqueue(21).enqueue(7).enqueue(11)
console.log(q);