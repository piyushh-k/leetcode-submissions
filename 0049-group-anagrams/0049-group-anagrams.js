/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*This approach is aa bit difficult intutively to come up on my own 
first make a map that will store our anagrams on diff buckets 
now i will loop through the array , for each string i will create a new 26 length array that will store the frequency of each lil alphabet in that array
lets say "bad" represents the state : 110100000000000000 
now I will store this frequency string in the map
if any other anagram comes up of this word it will have the same freq string hence i can then append it to the same bucket that "bad" is occupying
*/

var groupAnagrams = function (strs) {
    let map = new Map();
    for (let word of strs) {
        let arr = new Array(26).fill(0);
        for (let c of word) {
            arr[c.charCodeAt(0) - 97]++;
        }
        let code = arr.join("-"); /*very important to avoid collision*/

        if (!map.has(code)) {
            map.set(code, []);
        }
        map.get(code).push(word)
    }
    return Array.from(map.values());
};
// joining like ("") will fail in cases like :
// 1, 10, 1].join("-")   "1-10-1"
// [11, 0, 1].join("-")  "11-0-1"






//  using sorting
// var groupAnagrams = function(strs) {
//     let map = new Map();
//     let arr = [];
//     for(let str of strs){
//         let x = str.split("").sort().join("");
//         if(!map.has(x)){
//             map.set(x , []);
//         }
//         map.get(x).push(str);
//     }
//     return Array.from(map.values());
// };