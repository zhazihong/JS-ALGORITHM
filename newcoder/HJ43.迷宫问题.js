var maze = [
    [0, 1, 0, 0, 0,],
    [0, 1, 1, 1, 0,],
    [0, 0, 0, 0, 0,],
    [0, 1, 1, 1, 0,],
    [0, 0, 0, 1, 0,],
];
var row = maze.length;
var col = maze[0].length;
var visited = new Array(row).fill('').map(() => new Array(col).fill(false));
var res = [];

// 图深度优先遍历
const dfs = (r, c, path) => {
    visited[r][c] = true;
    // 递归终点
    if (r === row - 1 && c === col - 1) {
        res = path;
        return;
    }
    if (r + 1 < row && maze[r + 1][c] === 0 && !visited[r + 1][c]) {
        dfs(r + 1, c, [...path, `${r + 1},${c}`]);
    }
    if (c + 1 < col && maze[r][c + 1] === 0 && !visited[r][c + 1]) {
        dfs(r, c + 1, [...path, `${r},${c + 1}`]);
    }
    if (r - 1 >= 0 && maze[r - 1][c] === 0 && !visited[r - 1][c]) {
        dfs(r - 1, c, [...path, `${r - 1},${c}`]);
    }
    if (c - 1 >= 0 && maze[r][c - 1] === 0 && !visited[r][c - 1]) {
        dfs(r, c - 1, [...path, `${r},${c - 1}`]);
    }
}
dfs(0, 0, ['0,0']);
res.forEach((item) => console.log(`(${item})`))