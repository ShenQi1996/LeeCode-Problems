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

//Array -Reverse String  - Two Pointer

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

//Array - Reverse Words in a String III

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
