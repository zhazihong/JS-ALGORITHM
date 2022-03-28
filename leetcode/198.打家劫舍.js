/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 空间复杂度O(1)  时间复杂度O(n)
    if (!nums.length) return 0;
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        // 找到规律 f(k)=max(f(k-2) + A(k), f(k-1))
        const temp = dp0;
        dp0 = dp1;
        dp1 = Math.max((temp + nums[i - 1]), dp0);
    }
    return dp1;
};
// @lc code=end

