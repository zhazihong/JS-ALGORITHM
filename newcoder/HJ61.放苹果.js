const dp = (m, n) => {
    if (m === 1 || n === 1) {
        return 1;
    } else if (m < 0 || n <= 0) {
        return 0;
    } else {
        // 最后放苹果 和 最后不放苹果
        return dp(m - n, n) + dp(m, n - 1);
    }
};

console.log(dp(7, 3));
