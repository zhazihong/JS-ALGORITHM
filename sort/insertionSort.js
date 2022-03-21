/**
 * 插入排序：
 * 从第二个树开始往前边
 * 比他大就往后排
 * 以此类推进行到最后一个数
 * 
 * 时间复杂度：
 * 两个嵌套循环
 * 时间复杂度：O(n^2)
 */
Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        let temp = this[i];
        let j = i;
        while (j) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
}

let arr = [5, 4, 3, 2, 1];
arr.insertionSort();
console.log(arr);