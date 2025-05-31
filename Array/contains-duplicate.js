/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();

    for(const num of nums) {
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    };
    return false;
};

const arr = [1, 2, 3, 4, 5, 1];

const result = containsDuplicate(arr);

console.log(typeof result);