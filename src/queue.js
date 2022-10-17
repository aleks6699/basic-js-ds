const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  count = 0;
  getUnderlyingList() {
    if(this.count == 0)
      return {};
    return this.start;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if(this.count > 0) {
      this.end.next = node;
      this.end = node;
    } else {
      this.start = node;
      this.end = node;
    }
    this.count++;
  }

  dequeue() {
    if(!this.start)
      return;
    let res = this.start.value;
    this.start = this.start.next;
    this.count--;
    return res;
  }
}

module.exports = {
  Queue
};
