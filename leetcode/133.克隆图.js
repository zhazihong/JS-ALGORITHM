/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node.length) {
        return [];
    }
    const q = [node];
    const visited = new Map();
    visited.set(node, new Node(node.val));
    while (q.length) {
        const n = q.shift();
        (n.neighbors || []).forEach((ne) => {
            if (!visited.has(ne)) {
                visited.set(ne, new Node(ne.val));
                q.push(ne);
            }
            visited.get(n).neighbors.push(visited.get(ne));
        });
    }
    return visited.get(node);
};
// @lc code=end

