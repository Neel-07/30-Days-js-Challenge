//Task-1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120
  console.log(factorial(3)); // 6
  

//Task-2 : Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
  console.log(fibonacci(4)); // 3 (0, 1, 1, 2, 3)
  

//Task-3 : Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr, index = 0) {
    if (index === arr.length) {
      return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([5, 10, 15])); // 30
  

//Task-4 : Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr, index = 0, max = Number.NEGATIVE_INFINITY) {
    if (index === arr.length) {
      return max;
    }
    return findMax(arr, index + 1, Math.max(max, arr[index]));
  }
  
  console.log(findMax([3, 7, 2, 9, 5])); // 9
  console.log(findMax([12, 6, 8, 15])); // 15
  

//Task-5 : Write  a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str === '') {
      return '';
    }
    return reverseString(str.substr(1)) + str[0];
  }
  
  console.log(reverseString('hello')); // 'olleh'
  console.log(reverseString('world')); // 'dlrow'
  

//Task-6 : Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, -1));
  }
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  

//Task-7 : Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1; // Target not found
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, right);
    } else {
      return binarySearch(arr, target, left, mid - 1);
    }
  }
  
  const sortedArray = [1, 3, 5, 7, 9];
  console.log(binarySearch(sortedArray, 5)); // Index: 2
  console.log(binarySearch(sortedArray, 8)); // Index: -1 (not found)
  

//Task-8 : Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) {
      return 0;
    }
    let current = arr[index];
    return (current === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
  }
  
  const myArray = [2, 4, 2, 6, 2, 8, 2];
  console.log(countOccurrences(myArray, 2)); // 4
  console.log(countOccurrences(myArray, 6)); // 1
  

//Task-9 : Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function inOrderTraversal(node) {
    if (!node) {
      return;
    }
    inOrderTraversal(node.left);
    console.log(node.value); // Log the node value
    inOrderTraversal(node.right);
  }
  
  //  Define your binary tree and call inOrderTraversal(rootNode);
  

//Task-10 : Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
    if (!node) {
      return 0;
    }
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return 1 + Math.max(leftDepth, rightDepth);
  }
  
  // Define your binary tree and call treeDepth(rootNode);
  





