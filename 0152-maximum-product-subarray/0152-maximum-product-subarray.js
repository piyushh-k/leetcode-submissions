/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    let maxP = 0;
    if(n == 1){
        return nums[0];
    }
    for(let i = 0; i < n; i++){
        let mult = 1;
        for(let j = i; j < n; j++){
            mult = mult * nums[j];
            maxP = Math.max(mult , maxP);
        }
    }

    return maxP;
};