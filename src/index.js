import { mergeSort } from "./merge_sort";
import { createNode } from "./create_node";
import { prettyPrint } from "./pretty_print";
import { driver } from './driver';

//create a balanced binary search tree
export const BST = (array) => {
  const sortedArr = [...new Set(mergeSort(array))];

  const buildTree = (array, start = 0, end = array.length - 1) => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = createNode(array[mid]);

    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);

    return root;
  };

  const root = buildTree(sortedArr);

  const insertNode = (nodeToInsert, node = root) => {
    if (node === null) {
      return createNode(nodeToInsert);
    }
    //if value already exists abort
    if (nodeToInsert === node.data) {
      return node;
    }
    //If lower or higher than root,
    //recurse through tree of lower or higher values depending
    if (node.data < nodeToInsert) {
      node.right = insertNode(nodeToInsert, node.right);
    } else {
      node.left = insertNode(nodeToInsert, node.left);
    }
    return node;
  };

  const deleteNode = (nodeToDelete, node = root) => {
    if (node === null) return node;

    //find lowest value in tree
    const findMinVal = (node) => {
      while (node.left) {
        node = node.left;
      }
      return node;
    };
    //traverse tree (recursive)
    if (nodeToDelete < node.data) {
      node.left = deleteNode(nodeToDelete, node.left);
    } else if (nodeToDelete > node.data) {
      node.right = deleteNode(nodeToDelete, node.right);
    } else {
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      //set temp to lowest val right child
      let temp = findMinVal(node.right);
      node.data = temp.data;
      //recursively replace values on nodes
      node.right = deleteNode(temp.data, node.right);
    }
    return node;
  };

  const findNode = (nodeToBeFound, node = root) => {
    if (node === null) {
      console.log("Node not present in tree.");
      return false;
    }
    let found = false;
    //If values are equal return true
    if (nodeToBeFound === node.data) {
      console.log(`Node with value ${node.data} is present in tree: `, node);
      return true;
    }
    //traverse recursively through tree
    if (nodeToBeFound > node.data) {
      found = findNode(nodeToBeFound, node.right);
    } else if (nodeToBeFound < node.data) {
      found = findNode(nodeToBeFound, node.left);
    }
    return found;
  };

  const levelOrder = (node = root, fn = null) => {
    if (node === null) return result;

    let queue = [];
    let result = [];

    queue.push(node);
    result.push(node.data);

    while (queue.length > 0) {
      let current = queue.shift();

      if (current.left !== null) {
        queue.push(current.left);
        result.push(current.left.data);
      }

      if (current.right !== null) {
        queue.push(current.right);
        result.push(current.right.data);
      }
    }

    if (fn) {
      queue.forEach((item) => {
        fn(item);
      });
    }

    console.log("LevelOrder: ", result);
    return result;
  };

  const inOrder = (node = root, fn = null, result = []) => {
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    };

    traverse(node);
    if (fn) {
      result.forEach(fn);
    }
    console.log("InOrder: ", result);
    return result;
  };

  const preOrder = (node = root, fn = null, result = []) => {
    const traverse = (node) => {
      if (node === null) return;
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(node);
    console.log("PreOrder: ", result);
    if (fn) {
      result.forEach(fn);
    }
    return result;
  };

  const postOrder = (node = root, fn = null, result = []) => {
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.data);
    };
    traverse(node);

    if (fn) {
      result.forEach(fn);
    }
    console.log("PostOrder: ", result);
    return result;
  };

  const heightOfTree = (node = root) => {
    if (node === null || findNode === false) return -1;
    return Math.max(heightOfTree(node.left), heightOfTree(node.right)) +1;
  };

  const depth = (targetNode, node = root, fn = null) => {
    if (node === null) return -1;

    if (node.data === targetNode) return 0;

    let leftDepth = depth(targetNode, node.left);
    let rightDepth = depth(targetNode, node.right);

      if(leftDepth > -1){
        return leftDepth + 1;
      } else if (rightDepth > -1) {
        return rightDepth + 1;
      } else { 
        return -1;
      }

  };

  const isBalanced = (node = root) => {
      if(node === null) return true;

      if(Math.abs(heightOfTree(node.left) - heightOfTree(node.right) <= 1 &&
      isBalanced(node.left) === true &&
      isBalanced(node.right) === true)) {
        return true
      }
      return false
  };

  const reBalance = () => {};

  return {
    root,
    buildTree,
    insertNode,
    deleteNode,
    findNode,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    heightOfTree,
    depth,
    isBalanced,
    reBalance
  };
};

const tree = BST([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.insertNode(2);
tree.insertNode(300)
tree.insertNode(559)
tree.insertNode(12930)
tree.insertNode(0)
tree.insertNode(129423)
tree.insertNode(121239148)
// tree.deleteNode(6345);
tree.findNode(9);
tree.levelOrder();
tree.inOrder();
tree.preOrder();
tree.postOrder();
console.log('Height: ', tree.heightOfTree());
console.log('Depth: ', tree.depth(1))
console.log('IsBalanced: ', tree.isBalanced())
prettyPrint(tree.root);
