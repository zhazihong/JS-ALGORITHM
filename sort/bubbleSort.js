/**
 * 冒泡排序：
 * 
 * 思路：
 * 比较所有相邻元素，如果第一个比第二个打，则交换他们
 * 一轮一下，可以保证最后一个数是最大的
 * 执行n-1轮，就可以完成排序
 * 
 * 动画演示：https://visualgo.net/zh/sorting?slide=9-1
 * 
 * 两个嵌套循环
 * 时间复杂度：O(n^2)
 */
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
}

let arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
console.log(arr);