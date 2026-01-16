var solution = function(isBadVersion) {
    return function(n) {
        let low = 1;
        let high = n;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let bad = isBadVersion(mid);

            if (bad) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low; 
    };
};
