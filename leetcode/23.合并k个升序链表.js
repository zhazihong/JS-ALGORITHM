/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    };

    getParentIndex(index) {
        return (index - 1) >> 1;
    }

    // 上移
    shiftUp(index) {
        // 上移到堆顶 停止递归
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[index].val < this.heap[parentIndex].val) {
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
        if (this.heap[leftIndex] && this.heap[index].val > this.heap[leftIndex].val) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[index].val > this.heap[rightIndex].val) {
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
     * 删除堆顶并返回
     * 1. 用数组尾部元素替换堆顶(直接删除堆顶会破坏堆结构)
     * 2. 然后下移：将新堆顶和她得子节点进行交换，直到子节点大于等于这个新堆顶
     * 3. 大小为k的堆中删除堆顶的时间复杂度为O(logk)
     */
    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return top;
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const res = new ListNode(0);
    let p = res;
    const heap = new MinHeap();
    lists.forEach((l) => {
        if (l) heap.insert(l);
    });
    while (heap.size()) {
        const n = heap.pop();
        p.next = n;
        p = p.next;
        if (n.next) heap.insert(n.next);
    }
    return res.next;
};
// @lc code=end

