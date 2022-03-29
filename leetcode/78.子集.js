/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 时间复杂度O(2*N) 空间复杂度O(N)
    const res = [];
    const backtrack = (path, l, start) => {
        if (path.length === l) {
            res.push(path);
            return;
        }
        for (let j = start; j < nums.length; j++) {
            backtrack([...path, nums[j]], l, j + 1);
        }
    };
    for (let i = 0; i <= nums.length; i++) {
        backtrack([], i, 0);
    }
    return res;
};
// @lc code=end

