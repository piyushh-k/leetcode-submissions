/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let arr = [];
    for(let str of strs){
        let x = str.split("").sort().join("");
        if(!map.has(x)){
            map.set(x , []);
        }
        map.get(x).push(str);
    }
    return Array.from(map.values());
};