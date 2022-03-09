const bt = require('./bt');

// 递归
const inOrder = function (root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    inOrder(root.left);
    inOrder(root.right);
}

// 非递归
const inOrder2 = function (root) {
    let stack = [root];
    while (stack.length) {
        let p = stack.pop();
        console.log(p.val);
        if (p.right) stack.push(p.right);
        if (p.left) stack.push(p.left);
    }
}

console.log('先序遍历-递归');
inOrder(bt);
console.log('先序遍历-非递归');
inOrder2(bt);