var maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
];
var row = maze.length;
var col = maze[0].length;
var arr = [];
var res = [];

// 图深度优先遍历
const dfs = (r, c) => {
    arr.push(`${r},${c}`);
    if (r + 1 < row && maze[r + 1][c] === 0) {
        dfs(r + 1, c);
    }
    if (c + 1 < col && maze[r][c + 1] === 0) {
        dfs(r, c + 1);
    }
}
dfs(0, 0);
res.push(arr[arr.length - 1]);
for (let i = arr.length - 2; i >= 0; i--) {
    const [r, c] = arr[i].split(',');
    const [r1, c1] = res[0].split(',');
    if ((Number(r) + Number(c)) == (Number(r1) + Number(c1) - 1)) {
        res.unshift(arr[i]);
    }
}
res.forEach((item) => console.log(`(${item})`))