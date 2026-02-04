var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let low = 0;
    let high = rows - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target < matrix[mid][0]) {
            high = mid - 1;
        } else if (target > matrix[mid][cols - 1]) {
            low = mid + 1;
        } else {
            let left = 0;
            let right = cols - 1;

            while (left <= right) {
                let newMid = Math.floor((left + right) / 2);
                if (matrix[mid][newMid] === target) return true;
                else if (matrix[mid][newMid] < target) left = newMid + 1;
                else right = newMid - 1;
            }
            return false;
        }
    }
    return false;
};
