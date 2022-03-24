/**
 * 二分搜索：
 * 
 * 数组必须是有序的，否则需要先将数组排序
 * 
 * 思路：
 * 从数组的中间元素开始，如果中间元素正好是目标值，则搜素结束
 * 如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中搜索
 * 
 * 时间复杂度：O(logN)
 * 每一次比较都使搜素范围缩小一半
 */
Array.prototype.binarySearch = function (target) {
    let low = 0;
    let high = this.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midValue = this[mid];
        if (midValue > target) {
            high = mid - 1;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.binarySearch(3));