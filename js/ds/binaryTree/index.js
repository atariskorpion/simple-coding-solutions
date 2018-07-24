import Node from './Node';


const data = [45, 32, 1, 5, 19, 76, 102, 0, 20, 8];
const myBinaryTree = new Node(data[0]);

for (let i = 1; i < data.length; i++) {
  myBinaryTree.insert(data[i]);
}

console.log(myBinaryTree);
