/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // 讲解视频 https://leetcode-cn.com/problems/edit-distance/solution/shi-pin-jiang-jie-bian-ji-ju-chi-dong-tai-gui-hua-/
    // 动态规划表格计算 https://alchemist-al.com/algorithms/edit-distance
    const m = word1.length;
    const n = word2.length;
    if (m * n === 0) return m + n;
    const res = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m + 1; i++) {
        res[i][0] = i;
    }
    for (let i = 0; i < n + 1; i++) {
        res[0][i] = i;
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            const min = Math.min(res[i - 1][j], res[i][j - 1], res[i - 1][j - 1]);
            if (word1[i - 1] === word2[j - 1]) {
                res[i][j] = res[i - 1][j - 1];
            } else {
                res[i][j] = min + 1;
            }
        }
    }
    return res[m][n];
};
// @lc code=end

