/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // 时间复杂度 O(n*logN)
    // 空间复杂度O(1)
    if (!s.length || !g.length) return 0;
    const sortFun = (a, b) => { return a - b };
    g.sort(sortFun);
    s.sort(sortFun);
    let res = 0;
    // 贪心算法 从最小的饼干开始分
    s.forEach(n => {
        if (n >= g[res]) {
            res++;
        }
    });
    return res;
};
// @lc code=end

