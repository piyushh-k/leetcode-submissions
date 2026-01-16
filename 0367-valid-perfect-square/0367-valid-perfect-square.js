/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 0;
    let high = Math.floor(num/2);
    if(num == 1) return true;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(mid*mid < num){
            low = mid+1;
        } else if(mid*mid > num){
            high = mid-1;
        } else{
            return true;
        }
    }
    return false;
};