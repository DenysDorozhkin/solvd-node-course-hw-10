import { CustomHashTable } from "./custom-hash-table.js";

// Testing the CustomHashTable
const hashTable = new CustomHashTable();

// Test insertion
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("country", "Wonderland");

console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("country")); // Wonderland

// Test updating an existing key
hashTable.insert("age", 26);
console.log(hashTable.get("age")); // 26

// Test deletion
hashTable.delete("country");
console.log(hashTable.get("country")); // undefined

// Test collision handling
hashTable.insert("key1", "value1");
hashTable.insert("key2", "value2");
hashTable.insert("kye1", "value3"); // Intentional collision with "key1"

console.log(hashTable.get("key1")); // value1
console.log(hashTable.get("key2")); // value2
console.log(hashTable.get("kye1")); // value3

// Test iteration
hashTable.iterate((key, value) => {
  console.log(key, value);
});
