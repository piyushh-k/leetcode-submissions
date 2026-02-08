/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let n = piles.length;
    let max = -Infinity;
    for(let num of piles){
        max = Math.max(max , num);
    }
    let low = 1;
    let high = max;
    while(low < high){
        let mid = Math.floor((low+high)/2);
        let sum = 0;
        for(let num of piles){
            sum = sum + Math.ceil(num/mid);
        }
        if(sum <= h) high = mid;
        if(sum > h) low = mid + 1;
    }
    return low;
};