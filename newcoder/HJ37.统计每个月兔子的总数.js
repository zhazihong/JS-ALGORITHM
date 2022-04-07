const dp = (n) => {
    if (n <= 2) {
        return 1;
    }
    // 第n天的兔子总数 = 前一天的兔子总数 + 新生的兔子
    return dp(n - 1) + dp(n - 2);
}
console.log(dp(1));
console.log(dp(3));
console.log(dp(8));