const bt = require('./bt');

// 二叉树后序遍历
// 递归
const postOrder = function (root) {
    if (!root) {
        return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

// 非递归
const postOrder2 = function (root) {
    if (!root) return;
    let stack = [root];
    let resultStack = [];
    while (stack.length) {
        const n = stack.pop();
        resultStack.push(n.val);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while (resultStack.length) {
        const r = resultStack.pop();
        console.log(r);
    }
}

console.log('递归');
postOrder(bt);
console.log('非递归');
postOrder2(bt);