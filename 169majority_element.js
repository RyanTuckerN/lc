/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -231 <= nums[i] <= 231 - 1

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

function majorityElement(nums){
  const hash = {}

  for (let i = 0, n = nums.length, half = Math.ceil(nums.length / 2); i < n; i++){
    if (!hash[nums[i]]) hash[nums[i]] = 0;
    hash[nums[i]] ++
    if(hash[nums[i]] >= half)
      return nums[i]
  }
  for (key in hash){
    if(hash[key] >= Math.ceil(nums.length)){
      return key
    }
  }
}


//COMPLETED 1/1/2022
