const bt = require('./bt');

// 二叉树先序遍历
// 递归
const preOrder = function (root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

// 非递归
const preOrder2 = function (root) {
    let stack = [root];
    while (stack.length) {
        let p = stack.pop();
        console.log(p.val);
        if (p.right) stack.push(p.right);
        if (p.left) stack.push(p.left);
    }
}

console.log('递归');
preOrder(bt);
console.log('非递归');
preOrder2(bt);