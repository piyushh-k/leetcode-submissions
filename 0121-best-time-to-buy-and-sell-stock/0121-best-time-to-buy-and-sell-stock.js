/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let maxP = -Infinity;
    let lowest = +Infinity;
    for(let i = 0; i < n; i++){
        lowest = Math.min(lowest , prices[i]);
        maxP = Math.max(maxP , prices[i] - lowest);
    }
    return maxP;
};