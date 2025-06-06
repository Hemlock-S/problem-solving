/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0; 
    for(let i = 0; i < nums.length; i++){
        const numStr = String(nums[i]);
        if(numStr.length % 2 === 0){
            result++;
        }
    }
    return result;
};

const nums = [12, 345, 2, 6, 7896];

console.log(findNumbers(nums)); // Output: 2