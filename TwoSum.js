// Find two numbers from an array(arr) such that their sum is equal to a number(target).
// return the pair of their index.
function twoSum(arr, target) {
  let previousVal = [];

  for (let i = 0; i < arr.length; i++) {
    let reqVal = target - arr[i];
    if (previousVal[reqVal] != null) {
      console.log(previousVal[reqVal]);
      return [previousVal[reqVal], i];
    } else {
      console.log((previousVal[arr[i]] = i));
    }
  }
  return [];
}

console.log(twoSum([1, 7, 3, 5, 7, 9], 8));
// expected output: [0,1] pair of number whose sum = 8.

function twoSumsBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSumsBrute([12, 17, 2, 7], 9));
