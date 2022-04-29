//LeeCode
// Data Structure I

//Day 1

//Array - Contains Duplicate - using  new Map() object - map.set(), map.has()

const containsDuplicate = arr => {
  let map = new Map();
  for (let a of arr) {
    if (map.has(a)) {
      return true;
    } else {
      map.set(a, 1);
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

//Day 2

//Array - Two Sum
