/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return node1.val === node2.val
        && isSameTree(node1.left, node2.left)
        && isSameTree(node1.right, node2.right);
}
var isSubtree = function (root, subRoot) {
    // planA 速度比第二种方法快 但是额外增加了变量
    if (!root && !subRoot) return true;
    let queue = [root];
    while (queue.length) {
        let n = queue.shift();
        if (isSameTree(n, subRoot)) {
            return true;
        } else {
            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
        }
    }
    return false;

    // plan B 纯递归，很优雅
    // if (!root && !subRoot) return true;
    // if (!root || !subRoot) return false;
    // return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end

