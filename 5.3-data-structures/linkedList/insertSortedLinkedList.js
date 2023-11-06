// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(items) {
        this.head = null;

        items.forEach(item => this.push(item));
    }

    push(item) {
        if (this.head === null) {
            this.head = new Node(item, null);
            return;
        }

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(item, null);
    }

    show() {
        let node = this.head;
        while (node !== null) {
            process.stdout.write(`${node.value}, `);
            node = node.next;
        }
        process.stdout.write("\n");
    }
    insertSorted1(item) {
        if (this.head === null) {
            this.head = new Node(item, null);
            return;
        }
        let node = this.head;
        while (node.next.value < item) {
            node = node.next;
        }
        const newNext = node.next;
        node.next = new Node(item, newNext);
    }

    insertSorted2(item) {
        //Create new node with the item 
        const newNode = new Node(item, null);

        // If  list is empty or  item < head, insert at beginning
        if (this.head === null || item < this.head.value) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // Traverse list to find the insertion point
        let current = this.head;
        while (current.next !== null && current.next.value < item) {
            current = current.next;
        }

        // Insert new node
        newNode.next = current.next;
        current.next = newNode;
    }


}

let l = new LinkedList([1, 3, 5, 6, 7, 9]);
l.insertSorted(8);
l.show(); // 1, 3, 5, 6, 7, 8, 9

