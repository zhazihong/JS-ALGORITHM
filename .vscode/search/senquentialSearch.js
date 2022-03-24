/**
 * 顺序搜索：
 * 
 * 思路：
 * 遍历数组
 * 找到跟目标值相等的元素，就返回他的下标
 * 遍历结束后，如果没有搜索到目标值，就返回-1
 * 
 * 时间复杂度：O(n)
 */
Array.prototype.senquentialSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.senquentialSearch(0));