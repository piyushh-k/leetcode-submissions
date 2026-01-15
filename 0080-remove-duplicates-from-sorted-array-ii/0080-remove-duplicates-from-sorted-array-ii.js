/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { 
    let n = nums.length;
    
    for(let i = 0; i < n; i++){
        let count = 1;
        for(let j = i+1; j < n && nums[j] === nums[i]; j++){
            count++;
        }
        if(count > 2){
            nums.splice(i+2 , count-2);
        }
    }

};






