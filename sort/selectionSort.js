/**
 * 选择排序：
 * 找到数组中的最小值，选中它并将其放置在第一位
 * 接着找到第二小值，选中它将其放置在第二位
 * 以此类推，执行n-1轮
 * 
 * 时间复杂度：
 * 两个嵌套循环
 * 时间复杂度：O(n^2)
 */
Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < this.length - 1; j++) {
            if (this[minIndex] > this[j + 1]) {
                minIndex = j + 1;
            }
        }
        [this[minIndex], this[i]] = [this[i], this[minIndex]];
    }
}

let arr = [5, 4, 3, 2, 1];
arr.selectionSort();
console.log(arr);