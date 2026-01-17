/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};

 //o(n)
// var containsDuplicate = function(nums) {
//     let set = new Set();
//      for(let num of nums){
//         if(set.has(num)){
//             return true;
//         } else{
//             set.add(num);
//         }
//     }
//     return false;
// };



// o(nlogn)
// var containsDuplicate = function(nums) {
//     let n = nums.length;
//     nums.sort((a,b) => a-b)
//     for(let i = 0; i < n; i++){
//         if(nums[i] == nums[i+1]){
//             return true;
//         }
//     }
//     return false;
// };

//o(n^2)
// var containsDuplicate = function(nums) {
//     let n = nums.length;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             if(nums[i] === nums[j] && i!=j){
//                 return true;
//             }
//         }
//     }
//     return false;
// };