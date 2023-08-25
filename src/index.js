// console.log('Hi, I am a tree.')

// //Build a node class/factory

// const createNode = (data) => {
//     const node = {
//         data: data,
//         left: null,
//         right: null
//     }
//     return node;
// }

// const tree = (array) => {
//   let sortedArr = [];

//   array.forEach(element => {
//     if(!sortedArr.includes(element)) {
//       sortedArr.push(element);
//     }
//   });

//   sortedArr.sort((a, b) => a < b ? -1 : 1);

//   const root = buildTree(sortedArr)

// return root;
// }

// const buildTree = (array, start = 0, end = array.length -1) => {

//   if (start > end) return null;

//     const mid = Math.floor((start + end) / 2) ;

//     const root = createNode(array[mid]);

//     root.left = buildTree(array, start, mid -1);
//     root.right = buildTree(array, mid +1, end);

//   return root;
// }

// const insertNode = (node, nodeToInsert) => {
//   //Insert a node in the tree
//   if (node === null) return;

//     if(node.data < nodeToInsert.data) {
//       insertNode(node.right, nodeToInsert)
//       if(node.right === null) {
//         node.right = nodeToInsert;

//       }
//     } else {
//       insertNode(node.left, nodeToInsert)
//       if(node.left === null) {
//         node.left = nodeToInsert

//       }
//  };
// };
// const deleteNode = (node, nodeToDelete) => {
//   //base case
//   if (node === null) return node;
//   //find lowest node val
//   const findMinimumVal = (node) => {
//     while (node.left) {
//       node = node.left;
//     }
//     return node;
//   }
//   //recursively traverse tree
//   if (nodeToDelete < node.data) {
//     node.left = deleteNode(node.left, nodeToDelete);
//   } else if (nodeToDelete > node.data) {
//     node.right = deleteNode(node.right, nodeToDelete);
//   } else {
//     //if there is nothing on the left return the right childnode else return left childnode
//     if (node.left === null) {
//       return node.right;
//     } else if (node.right === null) {
//       return node.left;
//     }
//     //set temp to minimum right child val
//     let temp = findMinimumVal(node.right);
//     //set node.data to temp.data
//     node.data = temp.data;
//     //recursively replace data on nodes
//     node.right = deleteNode(node.right, temp.data);
//   }

//   return node;
// };

// const findNode = (node, nodeToBeFound) => {
//   if(node === null) return;

//     if(nodeToBeFound === node.data) {
//       console.log('Yes, tree contains node: ', node);
//       return true;
//     }
//     let found = false;
//     if (nodeToBeFound > node.data) {
//       found = findNode(node.right, nodeToBeFound);
//     } else if (nodeToBeFound < node.data){
//       found = findNode(node.left, nodeToBeFound);
//     }
//     if(!found) {
//       console.log('Node is not found in tree.')
//     }
//     return found;
// };

// const levelOrder = (node, fn = null, result = []) => {
//   if (node === null) return;

//   let queue = [];
//   queue.push(node);
//   result.push(node.data)
//   while(queue.length > 0) {

//     let current = queue.shift();

//     if(current.left !== null) {
//       queue.push(current.left);
//       result.push(current.left.data)
//     }
//     if(current.right !== null) {
//       queue.push(current.right);
//       result.push(current.right.data)
//     }
//   }
//     if(fn) {
//       queue.forEach(item => {
//         fn(item.data)
//       })
//     }
//   ;

//   console.log('LevelOrder:', result)
//   return result;
// }

// const inOrder = (node, fn = null, result = []) => {
//   const traverse = (node) => {
//     if (node === null) return;
//     traverse(node.left);
//     result.push(node.data);
//     traverse(node.right);
//   }
//   traverse(node);

//   if(fn) {
//     result.forEach(fn);
//   }
//   console.log('InOrder:', result)
//   return result;
// }

// const postOrder = (node, fn = null, result = []) => {
//   const traverse = (node) => {
//     if (node === null) return;
//     traverse(node.right);
//     result.push(node.data);
//     traverse(node.left);
//   }
//   traverse(node);

//   if(fn) {
//     result.forEach(fn);
//   }
//   console.log('PostOrder:', result)
//   return result;
// }

// const preOrder = (node, fn = null, result = []) => {
//   const traverse = (node) => {
//     if (node === null) return;
//     result.push(node.data);
//     traverse(node.left);
//     traverse(node.right);
//   }
//   traverse(node);
//   console.log('PreOrder:', result);
//   return result;
// }

// const determineHeight = (node) => {

//   if(node === null) return -1;
//   //height is defined by the number of edges in the longest path from a given node to a leaf node
//   //traverse the tree
//   // determine height of left subtree and right subtree
//   // determine which is higher
//   // return height

//   let leftSubTreeHeight = determineHeight(node.left);
//   let rightSubTreeHeight = determineHeight(node.right);
//   let height = 0;

//   if (leftSubTreeHeight > rightSubTreeHeight) {
//     height = leftSubTreeHeight+1;
//   }
//   else {
//     height = rightSubTreeHeight+1;
//   }

//   return height;

// };

// const depth = (node,  fn = null) => {
//   const root = node;

//   if(node === null) return 0;

//   return depthRecursion(node, root);

//   function depthRecursion(node, current) {
//     if (current === null) {
//       return -1;
//     }
//     else if (current === node) {
//       return 0;
//     }
//     else {
//       let leftDepth = depthRecursion(node, current.left);
//       let rightDepth = depthRecursion(node, current.right);
//       if(leftDepth > -1) {
//         return leftDepth +1;
//       } else if (rightDepth > -1 ) {
//         return rightDepth +1;
//       }
//       else return -1;
//     }
//   }
// }

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };

// const newTree = tree([8,4,67,1,5,9,324,3,7,23,6345]);
// const toBeInsertedNode = createNode(30);
// const secondInsert = createNode(6);
// const thirdToInsert = createNode(24);
// const fourthToInsert = createNode(20);
// const fifthToInsert = createNode(2334);

// insertNode(newTree, toBeInsertedNode);
// insertNode(newTree, secondInsert);
// insertNode(newTree, thirdToInsert);
// findNode(newTree, 3224);
// levelOrder(newTree);
// inOrder(newTree);
// postOrder(newTree)
// preOrder(newTree)

// levelOrder(newTree)

// determineHeight(newTree)

// depth(newTree)

// prettyPrint(newTree);

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
    if (node === null) return 0;

    let height = 0;
    let leftSubTreeHeight = heightOfTree(node.left);
    let rightSubTreeHeight = heightOfTree(node.right);
    
    if(leftSubTreeHeight > rightSubTreeHeight) {
      height = leftSubTreeHeight + 1;
    } else {
      height = rightSubTreeHeight + 1;
    }
    return height;
  };

  const depth = () => {};

  const isBalanced = () => {};

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

// tree.insertNode(2);
// tree.deleteNode(6345);
tree.findNode(9);
tree.levelOrder();
tree.inOrder();
tree.preOrder();
tree.postOrder();
console.log('Height: ', tree.heightOfTree());
prettyPrint(tree.root);
