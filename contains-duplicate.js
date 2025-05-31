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

const result = containsDuplicate(arr);
console.log(result);