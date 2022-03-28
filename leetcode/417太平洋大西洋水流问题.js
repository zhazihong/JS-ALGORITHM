const heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]];

var pacificAtlantic = function (heights) {
    let m = heights.length;
    let n = heights[0].length;
    let flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    let flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
    let res = [];

    // 图深度遍历
    dfs = (r, c, flow) => {
        flow[r][c] = true;
        // 遍历相邻节点
        [[r, c + 1], [r + 1, c], [r, c - 1], [r - 1, c]].forEach(([nr, nc]) => {
            if (
                // 不能超出边界
                nr < m && nr >= 0 && nc < n && nc >= 0 &&
                // 防止死循环
                !flow[nr][nc] &&
                // 逆流而上
                heights[r][c] <= heights[nr][nc]
            ) {
                dfs(nr, nc, flow);
            }
        });
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, flow1);
        dfs(i, m - 1, flow2);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, flow1);
        dfs(n - 1, j, flow2);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (flow1[i][j] && flow2[i][j]) {
                res.push([i, j]);
            }
        }
    }
    console.log(JSON.stringify(res));
    return res;
}

pacificAtlantic(heights);