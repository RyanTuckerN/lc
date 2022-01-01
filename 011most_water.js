/*
You are given an integer array heights of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

//EXAMPLE
// INPUT: heights = [1,8,6,2,5,4,8,3,7]
// OUTPUT: 49
// Explaination: max area is height[1] * height[8]

//single iteration
// look at last and first element, check which is bigger and stay on that index, move the other inward
function maxArea(heights) {
  let maxArea = 0,
    p1 = 0,
    p2 = heights.length - 1;

  while (p1 < p2) {
    let area;
    if(heights[p1] < heights[p2]){
      area = heights[p1] * (p2-p1)
    } else {
      area = heights[p2] * (p2-p1)
    }

    if (area > maxArea){
      maxArea = area
    }

    if(heights[p1] > heights[p2])
      p2--;
    else 
      p1++
  }
  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

//brute force
function maxAreaBrute(heights) {
  let maxArea = 0;

  for (let i = 0, n = heights.length; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let area = 0;
      if (heights[i] > heights[j]) {
        area = heights[j] * (j - i);
      } else {
        area = heights[i] * (j - i);
      }
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}

console.log(maxAreaBrute([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxAreaBrute([1, 1]));

//COMPLETED 1/1/2022