/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let len = triangle.length - 1;
    let res = triangle[len];
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            res[j] = triangle[i][j] + Math.min(res[j], res[j + 1])
        }
    }
    return res[0];
};
// @lc code=end

