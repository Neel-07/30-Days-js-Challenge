
// Task - 1 : Add Two Numbers
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}


function printLinkedList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test Case 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: 7 -> 0 -> 8

// Test Case 2
let l1_2 = new ListNode(0);
let l2_2 = new ListNode(0);
let result2 = addTwoNumbers(l1_2, l2_2);
printLinkedList(result2); // Output: 0

// Test Case 3
let l1_3 = new ListNode(9, new ListNode(9, new ListNode(9)));
let l2_3 = new ListNode(1);
let result3 = addTwoNumbers(l1_3, l2_3);
printLinkedList(result3); // Output: 0 -> 0 -> 0 -> 1

// Task - 2 : Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < n; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
// Test Case 1
let s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1)); // Output: 3 ("abc")

// Test Case 2
let s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); // Output: 1 ("b")

// Test Case 3
let s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3)); // Output: 3 ("wke")

// Test Case 4
let s4 = "";
console.log(lengthOfLongestSubstring(s4)); // Output: 0

// Test Case 5
let s5 = " ";
console.log(lengthOfLongestSubstring(s5)); // Output: 1 (" ")


// Task - 3 : Container With Most Water
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// Test Case 1
let heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights1)); // Output: 49

// Test Case 2
let heights2 = [1, 1];
console.log(maxArea(heights2)); // Output: 1

// Test Case 3
let heights3 = [4, 3, 2, 1, 4];
console.log(maxArea(heights3)); // Output: 16

// Test Case 4
let heights4 = [1, 2, 1];
console.log(maxArea(heights4)); // Output: 2

// Test Case 5
let heights5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxArea(heights5)); // Output: 20

// Task - 4 : 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates
        }

        let left = 0;
        let right = nums.length - 1;
        let target = -nums[i];

        while (left < right) {
            if (left === i) {
                left++;
                continue;
            }
            if (right === i) {
                right--;
                continue;
            }

            let sum = nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}
// Test Case 1
let nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ 0, -1, 1 ] ]

// Test Case 2
let nums2 = [];
console.log(threeSum(nums2)); // Output: []

// Test Case 3
let nums3 = [0, 0, 0];
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]

// Test Case 4
let nums4 = [-2, 0, 1, 1, 2];
console.log(threeSum(nums4)); // Output: [ [ -2, 0, 2 ], [ -2, 1, 1 ], [ 0, -2, 2 ], [ 1, -2, 1 ] ]

// Test Case 5
let nums5 = [-4, -1, -1, 0, 1, 2];
console.log(threeSum(nums5)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ 0, -1, 1 ] ]


// Task - 5 : Group Anagrams
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
// Test Case 1
let strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Test Case 2
let strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

// Test Case 3
let strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]

// Test Case 4
let strs4 = ["abc", "bca", "cab", "cba", "bac", "acb"];
console.log(groupAnagrams(strs4)); // Output: [["abc", "bca", "cab", "cba", "bac", "acb"]]

// Test Case 5
let strs5 = ["rat", "tar", "art", "car", "arc"];
console.log(groupAnagrams(strs5)); // Output: [["rat", "tar", "art"], ["car", "arc"]]
