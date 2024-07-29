// Task-1 : Implement a `Node` class to represent an element in a linked list with proeprties `value` and `next`.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Reference to the next node
    }
  }
  

// Task-2 : Implement a `LinkedList` class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
      this.head = null; // Reference to the first node
    }
  
    addNode(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    removeLastNode() {
      if (!this.head) {
        return; // Empty list
      }
      if (!this.head.next) {
        this.head = null; // Only one node
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    displayNodes() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  

// Task-3 : Implement a `Stack` class with methods `push` (add element), pop (remove element), and `peek`(view the top element).
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
      }
  }
  

// Task-4 : Use the `stack` class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (const char of str) {
      stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
      reversed += stack.pop();
    }
    return reversed;
  }
  
  console.log(reverseString('hello')); // Output: 'olleh'
  

// Task-5 : Implement a `Queue` class with methods `enqueue` (add element), `dequeue` (remove element), and front (view the first elememt).
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
      }
  }
  

// Task-6 : Use the `queue` class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
const printerQueue = new Queue();
printerQueue.enqueue('Job 1');
printerQueue.enqueue('Job 2');
printerQueue.enqueue('Job 3');

while (!printerQueue.isEmpty()) {
  console.log('Printing:', printerQueue.dequeue());
}


// Task-7 : Implement a `TreeNode` class to represent a node in a binary tree with properties value,left and right.
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null; // Reference to the left child
      this.right = null; // Reference to the right child
    }
  }
  

// Task-8 : Implement a `BinaryTree` class with methods for inserting value and performing in-order treaversal to display nodes.
class BinaryTree {
    constructor() {
      this.root = null; // Reference to the root node
    }
  
    insert(value) {
      // Insert a new value into the binary tree
      // ...
    }
  
    inOrderTraversal(node = this.root) {
      if (!node) {
        return;
      }
      this.inOrderTraversal(node.left);
      console.log(node.value); // Log the node value
      this.inOrderTraversal(node.right);
    }
  }

  
// Task-9 : Implement a `Graph` class with methods to add vertices, add edges , and perform a breadth first Search(BFS).
class Graph {
    constructor() {
      this.vertices = new Map(); // Map to store vertices and their edges
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex); // Log the visited vertex
  
        const neighbors = this.vertices.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  

// Task-10 : Use the `Graph` class to represent a simple network and perform BFS to find the shortest path between two nodes.
const myNetwork = new Graph();
myNetwork.addVertex('A');
myNetwork.addVertex('B');
myNetwork.addVertex('C');
myNetwork.addEdge('A', 'B');
myNetwork.addEdge('B', 'C');

console.log('Shortest path from A to C:');
myNetwork.bfs('A'); // Output: A -> B -> C
