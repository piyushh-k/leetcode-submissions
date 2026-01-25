/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length;
    let stack = []
    for(let ch of s){
        if (ch == '(' || ch == '[' || ch == '{'){
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;

            if (
                (ch === ')' && stack[stack.length - 1] === '(') ||
                (ch === ']' && stack[stack.length - 1] === '[') ||
                (ch === '}' && stack[stack.length - 1] === '{')
            ) {
                stack.pop();
            } else {
                return false; 
            }
        }
    }
    return stack.length == 0;
};