const graph = require('./graph');

/**
 * 图 广度优先遍历
 * 1 新建一个队列将根节点入队
 * 2 队头出队并访问
 * 3 把队头的没有访问过的相邻节点逐个入队
 * 4 重复2,3步骤直到队列为空
 */
const visited = new Set();
visited.add(2);
const queue = [2];
bfs = () => {
    while (queue.length) {
        const node = queue.shift();
        console.log(node);
        graph[node].forEach((k) => {
            if (!visited.has(k)) {
                visited.add(k);
                queue.push(k);
            }
        });
    }
};

bfs();