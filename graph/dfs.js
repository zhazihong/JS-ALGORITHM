const graph = require('./graph');

/**
 * 图 深度优先遍历
 * 1 访问跟节点
 * 2 对根节点的【没有访问过的相邻节点】逐个进行深度优先遍历
 */
const visited = new Set();
dfs = (node) => {
    console.log(node);
    visited.add(node);
    graph[node].forEach((k) => {
        if (!visited.has(k)) {
            dfs(k);
        }
    });
};

dfs(2);

console.log(graph);