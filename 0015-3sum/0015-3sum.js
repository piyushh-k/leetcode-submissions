/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    nums.sort((a,b) => a-b);
    let res = [];
    for(let i = 0; i < n-2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let low = i+1;
        let high = n-1;
        while(low < high){
            let sum = nums[i] + nums[low] + nums[high];
            if(sum === 0){
                res.push([nums[i] , nums[low] , nums[high]]);
                low++;
                high--;
                while(low < high && nums[low] == nums[low-1]) low++;
                while(low < high && nums[high] == nums[high+1]) high--;
            }else if(sum > 0) {
                high--;
            }else{
                low++;
            }
        }
    }
    return res;
};