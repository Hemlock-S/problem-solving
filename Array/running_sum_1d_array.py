from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result = []
        sum = 0
        for i in range(0, len(nums)):
            sum += nums[i]
            result.append(sum)
        return result
    
sol = Solution()
print(sol.runningSum([1, 1, 1, 1, 1]))