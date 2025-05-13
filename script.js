function indexOfIgnoreCase(s1, s2) {
  console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1
console.log(indexOfIgnoreCase("", ""));                 // Output: 0
console.log(indexOfIgnoreCase("abc", ""));              // Output: 0
console.log(indexOfIgnoreCase("", "a"));                // Output: -1

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
