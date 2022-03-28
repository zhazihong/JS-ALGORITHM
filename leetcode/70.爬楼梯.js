/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 空间复杂度O(1)  时间复杂度O(n)
    if (n < 2) return 1;
    let dp0 = 1, dp1 = 1;
    for (let index = 2; index < n + 1; index++) {
        const temp = dp0;
        dp0 = dp1;
        dp1 = temp + dp0;
    }
    return dp1;
};
// @lc code=end

