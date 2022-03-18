/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    };

    getParentIndex(index) {
        // 二进制位运算符 右移一位刚好相当于除二取整
        return (index - 1) >> 1;
    }

    // 上移
    shiftUp(index) {
        // 上移到堆顶 停止递归
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            // 继续上移到合适的位置
            this.shiftUp(parentIndex);
        }
    }

    getChildrenIndex(index) {
        return [index * 2 + 1, index * 2 + 2];
    }

    // 下移
    shiftDown(index) {
        const [leftIndex, rightIndex] = this.getChildrenIndex(index);
        if (this.heap[index] > this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if (this.heap[index] > this.heap[rightIndex]) {
            this.swap(index, rightIndex);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        // 将插入的堆底元素上移到合适的index
        this.shiftUp(this.heap.length - 1);
    }

    /**
     * 删除堆顶
     * 1. 用数组尾部元素替换堆顶(直接删除堆顶会破坏堆结构)
     * 2. 然后下移：将新堆顶和她得子节点进行交换，直到子节点大于等于这个新堆顶
     * 3. 大小为k的堆中删除堆顶的时间复杂度为O(logk)
     */
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    // 获取堆顶元素
    peek() {
        return this.heap[0];
    }

    // 获取堆大小
    size() {
        return this.heap.length;
    }

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (!nums) return;
    let heap = new MinHeap();
    nums.forEach(n => {
        heap.insert(n);
        if (heap.size() > k) {
            heap.pop();
        }
    });
    return heap.peek();
};
// @lc code=end

