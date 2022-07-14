/**
 * Basic Operations on Linked List
 * [x] Traversal: O(n) To traverse all the nodes one after another.
 * [x] Append: To add a node at the end of list
 * [ ] Insertion: To add a node at the given position.
 * [ ] Deletion: To delete a node at the given position.
 * [x] Searching: To search an element(s) by value.
 * [x] Updating: To update a node at the given position.
 */

// [] -> [] -> [] -> [] (-> [])

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
  }

  setValue(value) {
    this.value = value;
  }
}

class IndexOutOfBoundsError extends Error {
  constructor(index) {
    super(`Index out of bounds: ${index}`);
  }
}

const head = new Node(1, new Node(2, new Node(3, new Node(4))));
// console.log(list);

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  forEach(func) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      func(current.getValue());
      current = current.getNext();
    }
  }

  // [] -> [] -> ['hello'] -> []
  update(index, value) {
    if (index < 0) throw new IndexOutOfBoundsError(index);
    if (!this.head) throw new IndexOutOfBoundsError(index);

    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) {
        current.setValue(value);
        return;
      }
      current = current.getNext();
      i++;
    }

    if (i < index) throw new IndexOutOfBoundsError(index);
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while (current.getNext()) {
      current = current.getNext();
    }

    current.setNext(new Node(value));
  }

  find(predicate) {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (predicate(current.getValue())) {
        return current;
      }

      current = current.getNext();
    }

    return false;
  }
}

const list = new LinkedList(head);
// console.log(list);
// list.forEach(v => console.log(v.toString()));

const empty = new LinkedList();
empty.append("lol");
// empty.forEach(console.info);
empty.append("kek");
// empty.forEach(console.info);
empty.append("hello");
empty.append("Alex");
empty.append("!");

// console.log(empty.find(v => v === 'hello'));
