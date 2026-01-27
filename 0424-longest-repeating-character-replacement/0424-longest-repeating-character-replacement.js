var characterReplacement = function (s, k) {
    let n = s.length;
    let low = 0;
    let map = new Map();
    let maxWindow = 0;

    for (let high = 0; high < n; high++) {
        map.set(s[high], (map.get(s[high]) || 0) + 1);
        let maxVal = 0;
        for (let val of map.values()) {
            maxVal = Math.max(maxVal, val);
        }
        while (high - low + 1 - maxVal > k) {
            map.set(s[low], map.get(s[low]) - 1);
            low++;
        }

        maxWindow = Math.max(maxWindow, high - low + 1);
    }

    return maxWindow;
};
