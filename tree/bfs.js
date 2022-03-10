const bt = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
};

/**
 * 二叉树 广度优先遍历
 * 1 新建一个队列将根节点入队
 * 2 队头出队并访问
 * 3 把队头的children逐个入队
 * 4 重复2,3步骤直到队列为空
 */
bfs = (root) => {
    let queue = [root];
    while (queue.length) {
        const n = queue.shift();
        console.log(n.val);
        queue = [...queue, ...n.children];
    }
};

bfs(bt);