// 4/26/2022 LeeCode

//Algorithm

//Day1 / Day2

//Array -Best Time to Buy and Sell Stock
const maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      if (profit < prices[i] - buy) {
        profit = prices[i] - buy;
      }
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//Array -Binary Search - out put the index where target is in

const BSearch = (target, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    let mid = lower + Math.floor((upper - lower) / 2);
    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
};

console.log(BSearch(3, [1, 2, 3, 4, 5, 6]));

//Day 3

//Array -Two Pointers - Move Zeroes to the end by kee the order
// Moving from the back to the front
const moveZeros = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
    }
  }
};

//Array - Two Pointers, Binary Search - Two Sum II - Input Array Is Sorted

const TwoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (target === currSum) return [left + 1, right + 1];
    if (target < currSum) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
};

console.log(TwoSum([1, 2, 5, 6, 8, 9, 10], 10));

//Day 4

//Array Two Pointers -  -Reverse String  - Two Pointer

const ReverseString = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left = left + 1;
    right = right - 1;
  }
  return arr;
};

console.log(ReverseString(["h", "e", "l", "l", "o"]));

//Array Two Pointers - - Reverse Words in a String III

const ReverseWords = str => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let chars = arr[i].split("");
    chars = chars.reverse();
    arr[i] = chars.join("");
  }
  return arr.join(" ");
};

console.log(ReverseWords("hello my nam is sam"));

//Day5

//Linked List Two Pointers - - Middle of the linked List
// Linked List calls - head.next, head.val

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

const MiddleOfLinkedList = head => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(MiddleOfLinkedList(list.head));

//Linked List Two Pointers - - Remove Nth Node From End of List

const RemoveNthNodeFromEnd = (head, n = 2) => {
  let slow = head;
  let fast = head;
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  if (fast === null) {
    head = head.next;
    return head;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  console.log(head.next);
  return head;
};

console.log(RemoveNthNodeFromEnd(list.head));

//Day 6

//String  Sliding Window - - Longest Substring Without Repeating Characters

const LongestSubstring = str => {
  let max = 1;
  let newArr = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (!newArr.includes(str[i])) {
      newArr.push(str[i]);
    } else {
      newArr.shift();
      i--;
    }
    max = Math.max(max, newArr.length);
  }

  return max;
};

console.log(LongestSubstring("abcdecfgh"));
