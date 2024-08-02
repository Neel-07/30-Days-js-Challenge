// Task - 1: Two sum 
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] + nums[j - i] === target) {
                return [j - i, j];
            }
        }
    }
    return []; // Empty array if no solution found
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));    // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));         // Output: [1, 2]
console.log(twoSum([3, 3], 6));            // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9));   // Output: [3, 4]
console.log(twoSum([1, 5, 5, 11], 10));    // Output: [1, 2]


// Task - 2: Reverse integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0;
    }

    return res;    
};

// Test cases
console.log(reverse(123));        // Output: 321
console.log(reverse(-123));       // Output: -321
console.log(reverse(120));        // Output: 21
console.log(reverse(0));          // Output: 0
console.log(reverse(1534236469)); // Output: 0 (overflow case)

// Task - 3: Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    var half = 0;
    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === half || x === Math.floor(half / 10);
};


// Test cases
console.log(isPalindrome(121));     // Output: true
console.log(isPalindrome(-121));    // Output: false
console.log(isPalindrome(10));      // Output: false
console.log(isPalindrome(0));       // Output: true
console.log(isPalindrome(12321));   // Output: true

// Task - 4: Merge two sorted list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

var mergeTwoLists = function(list1, list2) {
    var mergedList = null;
    var currentNode = null;
    var smallerNode = null
    if(!list1) return list2
    if(!list2) return list1
  
    while(list1 || list2){
      if(!list1) {currentNode.next = list2; break;}
      if(!list2) {currentNode.next = list1; break;}
      if(list1.val <= list2.val){
        smallerNode = list1;
        list1 = list1.next
      }else{
        smallerNode = list2;
        list2 = list2.next;
      }
      if(!mergedList){
        mergedList = smallerNode;
        currentNode = mergedList
      }else{
        currentNode.next = smallerNode
        currentNode = currentNode.next;
      }
    }
    return mergedList
  
  };

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

l1 = createLinkedList([2, 5, 6]);
l2 = createLinkedList([1, 3, 4]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

l1 = createLinkedList([]);
l2 = createLinkedList([0]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 0

l1 = createLinkedList([5]);
l2 = createLinkedList([1, 2, 3, 4]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5

// Task - 5: Valid Parenthesis

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // create an empty stack to store opening brackets
    for (let c of s) { // loop through each character in the string
        if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
            stack.push(c); // push it onto the stack
        } else { // if the character is a closing bracket
            if (!stack.length || // if the stack is empty or 
                (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }
    }
    return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                          // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};


// Test cases
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
console.log(isValid(""));         // Output: true (empty string is valid)
console.log(isValid("["));        // Output: false