/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

 

Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.


 */

// BITWISE XOR operator ^
const singleNumberXOR = nums => nums.reduce((a,b) => a ^ b)

  //HASH TABLE
function singleNumberHash(nums) {
  const evenNumbersTracker = {};

  for (let i = 0, n = nums.length; i < n; i++) {
    if (!evenNumbersTracker[nums[i]]) evenNumbersTracker[nums[i]] = false;
    evenNumbersTracker[nums[i]] = !evenNumbersTracker[nums[i]];
  }
  const entries = Object.entries(evenNumbersTracker)
  for (let i = 0, n = entries.length; i < n; i++) {
    if(entries[i][1]) return entries[i][0] 
  }
}

//COMPLETED 1/1/2022

