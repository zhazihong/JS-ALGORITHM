/**
 * 堆：
 * 1. 堆是一种特殊的完全二叉树（完全二叉树每一层都是填满的，或者最后一层只缺少右侧的若干节点）
 * 2. 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点
 */

/**
 * 最小堆实现
 * 1. 在类里，声明一个数据，用来装元素
 * 2. 主要方法：插入、删除堆顶、获取堆顶、获取堆大小
 */
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
        return (index - 1) >> 2;
    }

    // 上移
    shiftUp(index) {
        // 上移到堆顶 停止递归
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[index] > this.heap[parentIndex]) {
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
        if (this.heap[index] < this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if (this.heap[index] < this.heap[rightIndex]) {
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

const heap = new MinHeap();
heap.insert(1);
heap.insert(2);
heap.insert(5);
// heap.pop();
console.log(heap.peek());
console.log(heap.size());