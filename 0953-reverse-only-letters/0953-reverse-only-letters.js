var reverseOnlyLetters = function(s) {
    let arr = s.split("");
    let low = 0, high = arr.length - 1;
    let valid = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    while (low < high) {
        if (!valid.has(arr[low])) low++;
        else if (!valid.has(arr[high])) high--;
        else {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
    }
    return arr.join("");
};
