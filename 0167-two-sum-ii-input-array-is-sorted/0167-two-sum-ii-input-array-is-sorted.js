/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let low = 0;
    let high = n-1;
    while(low < high){
        let sum = numbers[low] + numbers[high];
        if(sum < target){
            low++;
        } else if(sum > target){
            high--
        } else{
            return [low+1 , high+1];
        }
    }
};