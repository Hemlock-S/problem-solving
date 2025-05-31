/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
}

const nums = [1, 1, 1, 1, 1];
const output = runningSum(nums);
console.log(output);
