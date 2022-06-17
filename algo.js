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

//Second approach

const TwoSum2 = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curr = target - nums[i];
    if (!map.has(curr)) {
      map.set(nums[i], i);
    } else {
      return [map.get(cuur) + 1, i + 1];
    }
  }
};

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

//Second approach

const SecondReverseString = s => {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    let tem1 = s[start];
    let tem2 = s[end];
    s[start] = tem1;
    s[end] = tem2;
    start++;
    end--;
  }
};

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

//Second approach

const CountMiddleOfLinkedList = head => {
  let count = 1;
  let List1 = head.next;
  let List2 = head.next;
  if (!head.next) {
    return head;
  }
  while (List1) {
    count++;
    List1 = List1.next;
  }
  let mid = Math.floor(count / 2);
  for (let i = 1; i < mid; i++) {
    List2 = List2.next;
  }
  return List2;
};

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

//Second approach

const RemoveNthNodeFromEndLength = (head, n) => {
  let size = 0;
  let list = head;
  while (list) {
    size += 1;
    list = list.next;
  }
  if (size - n === 0 || size === 1) {
    return head.next;
  }
  list = head;
  for (let i = 1; i < size - n; i++) {
    list = list.next;
  }
  list.next = list.next.next;

  return head;
};

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

//Second approach

const LongestSubstringSet = str => {
  let set = new Set();
  let currMax = 0;
  let start = 0;
  let end = 0;
  while (end < str.length) {
    if (!set.has(str.charAt(end))) {
      set.add(str.charAt(end));
      end += 1;
    } else {
      set.delete(str.charAt(start));
      start += 1;
    }
    currMax = Math.max(currMax, end - start);
  }

  return currMax;
};

// String Sliding Window  - -Permutation in String
const Permutation = (s1, s2) => {
  let neededChar = {};
  for (let i = 0; i < s1.length; i++) {
    neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1; /// different way to get the property of a obj
  } // neededChar.propertyName  -- get the value base on what comes after the .
  // neededChar["propertyName"] -- evaluate what is inside the [] then use
  let left = 0; //                                that property to get the value
  let right = 0;
  let neededLength = s1.length;
  while (right < s2.length) {
    if (neededChar[s2[right]] > 0) neededLength--;
    neededChar[s2[right]] = neededChar[s2[right]] - 1;
    right++;
    if (neededLength === 0) return true;
    if (right - left === s1.length) {
      if (neededChar[s2[left]] >= 0) neededLength++;
      neededChar[s2[left]] = neededChar[s2[left]] + 1;
      left++;
    }
  }
  return false;
};

console.log(Permutation("ab", "eidboaoo"));

//Day7

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// Breadth-First-Search
const bfc = (graph, sp, ep) => {
  let queue = [];
  queue.push(sp);
  let visited = [sp];
  while (queue.length > 0) {
    let currNode = queue.shift();
    if (currNode === ep) return true;
    for (let neighbor of graph[currNode]) {
      if (!visited.includes(neighbor)) {
        queue.push(neighbor);
        visited.push(neighbor);
      }
    }
  }
  return false;
};

// console.log(bfc(graph, "a", "e"));

//Depth-First-Search
const dfs = (graph, sp, ep) => {
  let stack = [sp];
  while (stack.length > 0) {
    let currNode = stack.pop();
    if (currNode === ep) return true;
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// console.log(dfs(graph, "a", "f"));

//Depth-Frist-Search Recursive

const dfsRe = (graph, sp, ep) => {
  console.log(sp);
  if (sp === ep) return true;
  for (let neighbor of graph[sp]) {
    let result = dfsRe(graph, neighbor, ep);
    return result;
  }
  return false;
};

// console.log(dfsRe(graph, "a", "f"));

//Breadth-First Search / Depth-First Search - Flood Fill

//DFS

const FloodFillDFS = (image, sr, sc, newColor) => {
  let currColor = image[sr][sc];
  if (currColor === newColor) return image;

  const dfs = (row, col) => {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) {
      return;
    }
    if (image[row][col] !== currColor) {
      return;
    }

    image[row][col] = newColor;
    dfs(row - 1, col); //up
    dfs(row + 1, col); //down
    dfs(row, col - 1); //left
    dfs(row, col + 1); //right

    return image;
  };
  return dfs(sr, sc);
};

// console.log(
//   FloodFillDFS(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

//BFS

const FloodFillBFS = (image, sr, sc, newColor) => {
  let rows = image.length;
  let cols = image[0].length;
  let oldColor = image[sr][sc];
  let queue = [];
  queue.push([sr, sc]);
  let visited = new Set();
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length > 0) {
    let [a, b] = queue.shift();
    if (visited.has(`${a}${b}`) || oldColor != image[a][b]) continue;
    image[a][b] = newColor;
    visited.add(`${a}${b}`);
    for (let [x, y] of directions) {
      let [x1, y1] = [a + x, b + y];
      if (x1 < 0 || y1 < 0 || x1 > rows - 1 || y1 > cols - 1) continue;
      queue.push([x1, y1]);
    }
  }
  return image;
};

// console.log(
//   FloodFillBFS(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

// Breadth-First Search / Depth-First Search  - - Max Area of Island

//DFS
const MaxAreaOfIsland = grid => {
  const findMaxIsland = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) return;
    count++;
    grid[i][j] = 0;
    findMaxIsland(i + 1, j);
    findMaxIsland(i - 1, j);
    findMaxIsland(i, j + 1);
    findMaxIsland(i, j - 1);
  };

  let rows = grid.length;
  let cols = grid[0].length;
  let count = 0;
  let max = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      findMaxIsland(i, j);
      max = Math.max(count, max);
      count = 0;
    }
  }
  return max;
};

// console.log(
//   MaxAreaOfIsland([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//   ])
// );

//Day8

// Breadth-First Search / Depth-First Search - - Merge Two Binary Trees

const MergeTwoBinaryTrees = (Tree1, Tree2) => {
  if (!Tree1 && !Tree2) return null;
  let value = 0;
  value = value + (Tree1 ? Tree1.val : 0);
  value = value + (Tree2 ? Tree2.val : 0);

  let newTree = new TreeNode(value);
  newTree.left = (Tree1 ? Tree1.left : null, Tree2 ? Tree2.left : null);
  newTree.right = (Tree1 ? Tree1.right : null, Tree2 ? Tree2.right : null);

  return newTree;
};

//Depth-First Search - -Populating Next Right Pointers in Each Node

const connect = root => {
  if (root === null) return root;
  let stack = [{ l: root.left, r: root.right }];
  while (stack.length > 0) {
    let { l, r } = stack.pop();
    if (l === null || r === null) {
      continue;
    }
    l.next = r;
    stack.push({ l: l.left, r: l.right });
    stack.push({ l: l.right, r: r.left });
    stack.push({ l: r.left, r: r.right });
  }
  return root;
};

//Day9

//Matrix - -Breadth-First Search / Depth-First Search

//BFS
const updateMatrix = matrix => {
  let Rows = matrix.length;
  let Cols = matrix[0].length;
  let newArr = new Array(Rows).fill().map(() => Array(Cols).fill());
  let queue = [];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < Cols; j++) {
      if (matrix[i][j] === 0) {
        newArr[i][j] = 0;
        queue.push([i, j]);
      } else {
        newArr[i][j] = -1;
      }
    }
  }

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let d of directions) {
      let newR = x + d[0];
      let newC = y + d[1];
      if (newR < 0 || newC < 0 || newR >= Rows || newC >= Cols) continue;
      if (newArr[newR][newC] === 0) continue;
      if (newArr[newR][newC] === -1) {
        newArr[newR][newC] = newArr[x][y] + 1;
        queue.push([newR, newC]);
      }
    }
  }

  return newArr;
};

//Rotting Oranges - - Breadth-First Search / Depth-First Search

// Breath-First Search
const orangesRotting = grid => {
  let Rows = grid.length;
  let Cols = grid[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let queue = [];
  let time = 0;
  let fresh = 0;

  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < Cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh += 1;
      }
    }
  }

  if (fresh === 0) {
    return 0;
  }

  while (queue.length > 0) {
    let queueSize = queue.length;
    time += 1;
    for (let timePass = 0; timePass < queueSize; timePass++) {
      let [x, y] = queue.shift();
      for (let d of directions) {
        let newR = x + d[0];
        let newC = y + d[1];
        if (
          newR < 0 ||
          newC < 0 ||
          newR >= Rows ||
          newC >= Cols ||
          grid[newR][newC] != 1
        ) {
          continue;
        } else {
          grid[newR][newC] = 2;
          fresh -= 1;
          queue.push([newR, newC]);
        }
      }
    }
  }

  if (fresh === 0) {
    return time - 1;
  }

  return -1;
};
