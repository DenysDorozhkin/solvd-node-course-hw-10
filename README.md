<h3 align="center">Custom hash table</h3>

---

<p align="center"> This project implements a basic hash table data structure in JavaScript.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Class Details and Methods](#class_details_and_methods)
- [Examples](#examples)
- [Analysis](#analysis)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This JavaScript project presents a CustomHashTable class. The CustomHashTable class allows for efficient insertion, retrieval, deletion, and iteration of key-value pairs. The hash table uses a custom hash function to compute the index for each key, handling collisions using linked lists.

## 🏁 Getting Started <a name = "getting_started"></a>

```
git clone https://github.com/DenysDorozhkin/solvd-node-course-hw-10.git
```

```
cd solvd-node-course-hw-10
```

## 🎈 Usage <a name = "usage"></a>

```
import { CustomHashTable } from './CustomHashTable';

// Create a new hash table
const hashTable = new CustomHashTable();

// Insert key-value pairs
hashTable.insert('name', 'Alice');
hashTable.insert('age', 30);

// Retrieve values
console.log(hashTable.get('name')); // Output: Alice
console.log(hashTable.get('age'));  // Output: 30

// Delete a key-value pair
hashTable.delete('name');

// Iterate through all key-value pairs
hashTable.iterate((key, value) => {
  console.log(`${key}: ${value}`);
});
```

## 🔧 Class Details and Methods <a name = "class_details_and_methods"></a>

Class Details

Node

Represents a node in the linked list used to handle collisions.

Properties

- key: The key associated with the node.
- value: The value associated with the node.
- next: A pointer to the next node in the linked list.

Constructor

```
constructor(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}
```

CustomHashTable

Represents the hash table.

Properties

- table: An array that holds the linked lists of nodes.
- size: The size of the hash table.

Constructor

```
constructor(size = 50) {
  this.table = new Array(size);
  this.size = size;
}
```

---

Methods

hash

Computes a hash value for a given key.

Parameters

- key (string): The key to hash.

Returns

- number: The computed hash value.

insert

Inserts a key-value pair into the hash table.

Parameters

- key (string): The key to insert.
- value (any): The value to insert.

Returns

- void

get

Retrieves the value associated with a given key.

Parameters

- key (string): The key to retrieve.

Returns

- any: The value associated with the key, or undefined if the key is not found.

delete

Deletes a key-value pair from the hash table.

Parameters

- key (string): The key to delete.

Returns

- boolean: true if the key was deleted, false otherwise.

iterate

Iterates through all key-value pairs in the hash table.

Parameters

- callback (function): A function to call for each key-value pair. Receives key and value as arguments.

Returns

- void

## 🧐 Examples <a name = "examples"></a>

Example 1: Basic Usage

```
const hashTable = new CustomHashTable();

hashTable.insert('name', 'Alice');
hashTable.insert('age', 30);

console.log(hashTable.get('name')); // Output: Alice
console.log(hashTable.get('age'));  // Output: 30

hashTable.delete('name');

hashTable.iterate((key, value) => {
  console.log(`${key}: ${value}`);
});
```

Example 2: Handling Collisions

```
const hashTable = new CustomHashTable(5); // Small size to force collisions

hashTable.insert('a', 1);
hashTable.insert('b', 2);
hashTable.insert('f', 3); // 'a' and 'f' should hash to the same index

hashTable.iterate((key, value) => {
  console.log(`${key}: ${value}`);
});
```

## 🚀 Analysis <a name = "analysis"></a>

Performance Analysis of Custom Hash Table

Custom Hash Function

The custom hash function in this implementation converts a string key into an index within the bounds of the hash table's array. The function iterates over each character in the key, performs bitwise operations to scramble the characters, and then takes the modulo with the table size to ensure the index is within the valid range.

Time Complexity

- Hash Function: The time complexity of the hash function is 𝑂(𝑚), where 𝑚 is the length of the key. This is because the function iterates through each character in the key once.

Key Operations

Insertion

When inserting a key-value pair:

1. The hash function computes the index for the key.
2. If the index is empty, a new node is inserted directly.
3. If there is a collision (i.e., another node already exists at the computed index), the method traverses the linked list at that index to find either the end of the list or an existing node with the same key to update its value.

- Best Case: 𝑂(1) – When there is no collision.
- Average Case: 𝑂(1) – With a good hash function and a low load factor (ratio of the number of elements to the table size), collisions are minimized.
- Worst Case: 𝑂(𝑛) – When all keys hash to the same index, resulting in a single linked list of length 𝑛.

Retrieval

When retrieving a value by key:

1. The hash function computes the index for the key.
2. The method then traverses the linked list at that index to find the node with the matching key.

- Best Case: 𝑂(1) – When the key is the first node in the list at the computed index.
- Average Case: 𝑂(1) – Assuming a well-distributed hash function and a low load factor.
- Worst Case: 𝑂(𝑛) – When all keys hash to the same index.

Deletion

When deleting a key-value pair:

1. The hash function computes the index for the key.
2. The method then traverses the linked list at that index to find and remove the node with the matching key.

- Best Case: 𝑂(1) – When the key is the first node in the list at the computed index.
- Average Case: 𝑂(1) – Assuming a well-distributed hash function and a low load factor.
- Worst Case: 𝑂(𝑛) – When all keys hash to the same index.

Trade-Offs

1. Chaining vs. Open Addressing: This implementation uses chaining (linked lists) to handle collisions. The primary alternative is open addressing (probing), which can have better cache performance but is more complex to implement correctly. Chaining is simpler and handles high load factors more gracefully.

2. Load Factor and Resizing: The current implementation does not include resizing logic. In practice, a hash table should resize when the load factor exceeds a certain threshold to maintain efficient operations. Not implementing resizing keeps the code simple but can degrade performance as more elements are added.

3. Hash Function Complexity: The hash function is relatively simple and efficient. However, more complex hash functions could reduce the likelihood of collisions further but would increase the time complexity of computing the hash.

4. Memory Usage: Using linked lists for collision handling can use more memory compared to open addressing, especially if there are many collisions resulting in long lists.

Conclusion

The CustomHashTable class provides efficient average-case performance for insertion, retrieval, and deletion operations, with 𝑂(1) time complexity, assuming a well-distributed hash function and a low load factor. However, in the worst case, performance can degrade to 𝑂(𝑛) due to collisions. The implementation is designed for simplicity and clarity, which makes it a good educational tool and a starting point for more complex hash table designs.

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - App Environment

## ✍️ Authors <a name = "authors"></a>

- https://github.com/DenysDorozhkin
