const bt = require('./bt');

// 二叉树中序遍历
// 递归
// const inOrder = function (root) {
//     if (!root) {
//         return;
//     }
//     inOrder(root.left);
//     console.log(root.val);
//     inOrder(root.right);
// }

// 非递归
const inOrder2 = function (root) {
    let stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            // console.log(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
        // console.log(p);
    }
}

// console.log('递归');
// inOrder(bt);
console.log('非递归');
inOrder2(bt);