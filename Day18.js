// Task - 1 : Implement the bubble sort algorithm to  sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  console.log('Bubble Sorted Array:', bubbleSort(unsortedArray));

  
// Task - 2 : Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap elements
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
  
  console.log('Selection Sorted Array:', selectionSort(unsortedArray));
  

// Task - 3 : Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: already sorted or empty array
    }
  
    const pivot = arr[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];
  
    // Partition the array into left (less than pivot) and right (greater than pivot) subarrays
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right subarrays
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
  
    // Combine the sorted subarrays with the pivot
    return [...sortedLeft, pivot, ...sortedRight];
  }
  
  const unsortedArray1 = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = quickSort(unsortedArray1);
  
  console.log('Sorted Array (Quicksort):', sortedArray);
  

// Task - 4 : Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found the target value
        }
    }
    return -1; // Target value not found
}

const myArray = [10, 20, 30, 40, 50];
const targetValue = 30;
const result = linearSearch(myArray, targetValue);
console.log(`Index of ${targetValue}: ${result}`);


// Task - 5 : Implement the binary search algorithm to find a target value in a sorted array. Log the index of the trarget value. 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found the target value
        } else if (arr[mid] < target) {
            left = mid + 1; // Adjust left boundary
        } else {
            right = mid - 1; // Adjust right boundary
        }
    }
    return -1; // Target value not found
}

const sortedArray1 = [10, 20, 30, 40, 50];
const targetValue2 = 30;
const result2 = binarySearch(sortedArray1, targetValue2);
console.log(`Index of ${targetValue2}: ${result2}`);


// Task - 6 : Write a function to count the occurences of each character in a string. Log the character counts. 
function countCharacterOccurrences(str) {
    const charCounts = {};
    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return charCounts;
}

const myString = "hello, world!";
const charOccurrences = countCharacterOccurrences(myString);
console.log("Character occurrences:");
for (const char in charOccurrences) {
    console.log(`${char}: ${charOccurrences[char]}`);
}


// Task - 7 : Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeats(str) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

const inputString = "abcabcbb";
const longestLength = longestSubstringWithoutRepeats(inputString);
console.log(`Longest substring length without repeats: ${longestLength}`);


// Task - 8 : Write a function to rotate an array by K positions. Log the rotated array.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k > n
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
}

const originalArray = [1, 2, 3, 4, 5];
const kPositions = 2;
const rotatedArray = rotateArray(originalArray, kPositions);
console.log("Rotated array:", rotatedArray);


// Task - 9 : Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from both arrays
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

const sortedArray2 = [1, 3, 5];
const sortedArray3 = [2, 4, 6];
const mergedArray = mergeSortedArrays(sortedArray2, sortedArray3);
console.log("Merged sorted array:", mergedArray);


// Task - 10 : Write a function to solve the Fibonacci sequence using dynamic programming. Log hte Fibonacci numbers.
function fibonacciDP(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const n = 10; // Change this to the desired number of Fibonacci numbers
const fibonacciNumbers = fibonacciDP(n);
console.log("Fibonacci numbers:", fibonacciNumbers);


// Task - 11 : Write function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsackDP(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

const itemWeights = [2, 3, 4, 5];
const itemValues = [3, 4, 5, 6];
const knapsackCapacity = 5;
const maxValue = knapsackDP(itemWeights, itemValues, knapsackCapacity);
console.log("Maximum value from knapsack:", maxValue);
