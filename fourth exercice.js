class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(item) {
      this.items.push(item);
    }
    dequeue() {
      return this.items.shift();
    }
    peek() {
      return this.items[0];
    }
  }
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.peek()); 
  queue.dequeue();
  console.log(queue.peek()); 
  queue.dequeue();
  console.log(queue.peek()); 