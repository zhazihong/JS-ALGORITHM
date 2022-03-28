/**
 * 快速排序：
 * 用于实战中的排序 快排用于chrome浏览器，火狐浏览器sort用的归并排序
 * 
 * 思路：
 * 分区：从数组中任意选择一个“基准”，所有比基准小的元素放在基准前面，比基准大的元素放在基准后面
 * 递归：递归地对基准前后的子数组进行分区
 * 
 * 动画演示：https://visualgo.net/zh/sorting?slide=9-1
 * 
 * 时间复杂度：
 * 递归的时间复杂度是O(logN)
 * 分区的时间复杂度是O(n)
 * 时间复杂度：O(n*logN)
 */
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) { return arr; }
        let left = [];
        let right = [];
        let mid = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        console.log('----------', mid);
        console.log(left);
        console.log(right);
        return [...rec(left), mid, ...rec(right)];
    }
    const res = rec(this);
    // 将返回的结果挂到this上
    res.forEach((n, i) => this[i] = n);
}

let arr = [5, 4, 3, 2, 1];
arr.quickSort();
console.log(arr);