// 4/26/2022 LeeCode Blink 75

//Array -Best Time to Buy and Sell Stock
// const maxProfit = function (prices) {
//   let profit = 0;
//   let buy = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < buy) {
//       buy = prices[i];
//     } else {
//       if (profit < prices[i] - buy) {
//         profit = prices[i] - buy;
//       }
//     }
//   }

//   return profit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//Array -Binary Search

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
