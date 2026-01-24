/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxTrapped = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxTrapped = Math.max(maxTrapped, area);

        if (height[left] <= height[right]) {
            left++;   
        } else {
            right--;  
        }
    }

    return maxTrapped;
};










//o(n square)
// var maxArea = function(height) {
//     let n = height.length;
//     let maxTrap = -Infinity;
//     for(let i = 0; i < n-1; i++){
//         for(let j = i+1; j < n; j++){
//                 let minHeight = Math.min(height[i], height[j]);
//                 let area = minHeight * Math.abs(j-i);
//                 maxTrap = Math.max(maxTrap , area); 
//         }
//     }
//     return maxTrap;
// };