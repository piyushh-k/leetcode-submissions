/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let low = 0;
    let high = 0;
    let minL = +Infinity;
    let sum = 0
    while (high < n) {
        sum = sum + nums[high];
        while (sum >= target) {
            minL = Math.min(minL, high - low + 1)
            sum = sum - nums[low];
            low++;
        }
        high++;
    }
    return minL === Infinity ? 0 : minL;
}







//bruteforce
// var minSubArrayLen = function(target, nums) {
//     let minL = +Infinity;
//     let n = nums.length;
//     for(let i = 0; i < n; i++){
//         let sum = 0;
//         for(let j = i; j < n; j++){
//             sum = sum + nums[j];
//             if(sum >= target){
//                 minL = Math.min(minL , j-i+1)
//             }
//         }
//     }
//     if(minL == +Infinity){return 0}
//     return minL
// };