/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length;
    let arr = [];
    for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++){
            if(nums[j] < nums[i]){
                count++;
            }
        } 
        arr.push(count);
    }
    return arr;
};