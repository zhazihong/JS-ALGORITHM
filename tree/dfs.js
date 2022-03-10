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
 * 二叉树 深度优先遍历
 * 1 访问跟节点
 * 2 对根节点的children逐个进行深度优先遍历
 */
dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};

dfs(bt);