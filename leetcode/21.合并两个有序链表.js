/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 时间复杂度O(n)---n是链表1和链表2的长度  空间复杂度O(1)
    // 使用归并排序的思路
    const res = new ListNode(0);
    let p = res;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next;
    }
    if (list1) {
        p.next = list1
    }
    if (list2) {
        p.next = list2
    }
    return res.next;
};
// @lc code=end

