// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // Use two pointers to traverse the list
  let slow = list.head;
  let fast = list.head;

  // Move slow pointer one step and fast pointer two steps
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If they meet, the list is circular
    if (slow === fast) {
      return true;
    }
  }

  // If we reach the end of the list, it's not circular
  return false;
}

module.exports = circular;
