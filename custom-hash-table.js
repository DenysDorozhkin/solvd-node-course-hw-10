// Represents a Node with basic properties: key, value, next.
class Node {
  // Creates an instance of Node.
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

// Represents a Node with basic properties: table, size.
export class CustomHashTable {
  // Creates an instance of CustomHashTable.
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  // Custom hash function.
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % this.size;
  }

  // Insert key-value pair.
  insert(key, value) {
    const index = this.hash(key);
    let node = this.table[index];
    if (!node) {
      this.table[index] = new Node(key, value);
    } else {
      while (node.next) {
        if (node.key === key) {
          node.value = value;
          return;
        }
        node = node.next;
      }
      if (node.key === key) {
        node.value = value;
      } else {
        node.next = new Node(key, value);
      }
    }
  }

  // Retrieve value by key.
  get(key) {
    const index = this.hash(key);
    let node = this.table[index];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return undefined;
  }

  // Delete key-value pair.
  delete(key) {
    const index = this.hash(key);
    let node = this.table[index];
    if (!node) {
      return false;
    }
    if (node.key === key) {
      this.table[index] = node.next;
      return true;
    }
    let prev = null;
    while (node) {
      if (node.key === key) {
        prev.next = node.next;
        return true;
      }
      prev = node;
      node = node.next;
    }
    return false;
  }

  // Iterate through all key-value pairs.
  iterate(callback) {
    for (let i = 0; i < this.size; i++) {
      let node = this.table[i];
      while (node) {
        callback(node.key, node.value);
        node = node.next;
      }
    }
  }
}
