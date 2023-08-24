console.log('Hi, I am a tree.')

//Build a node class/factory
 
const createNode = (data) => {
    const node = {
        data: data,
        left: null,
        right: null
    }
    return node;
}

const tree = (array) => {
  let sortedArr = [];

  array.forEach(element => {
    if(!sortedArr.includes(element)) {
      sortedArr.push(element);
    }
  });

  sortedArr.sort((a, b) => a < b ? -1 : 1);

  const rootNode = buildTree(sortedArr)


  return rootNode;
}

const buildTree = (array, start = 0, end = array.length -1) => {

  if (start > end) return null;
  
    const mid = Math.floor((start + end) / 2) ;

    const root = createNode(array[mid]);

    root.left = buildTree(array, start, mid -1);
    root.right = buildTree(array, mid +1, end);

  return root;
}

const insertNode = (node, nodeToInsert) => {
  //Insert a node in the tree
  if (node === null) return;

    if(node.data < nodeToInsert.data) {
      insertNode(node.right, nodeToInsert)
      if(node.right === null) {
        node.right = nodeToInsert;

      }
    } else {
      insertNode(node.left, nodeToInsert)
      if(node.left === null) {
        node.left = nodeToInsert
        
      }
 };
};
const deleteNode = (node, nodeToDelete) => {
  //base case
  if (node === null) return node;
  //find lowest node val
  const findMinimumVal = (node) => {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  //recursively traverse tree
  if (nodeToDelete < node.data) {
    node.left = deleteNode(node.left, nodeToDelete);
  } else if (nodeToDelete > node.data) {
    node.right = deleteNode(node.right, nodeToDelete);
  } else {
    //if there is nothing on the left return the right childnode else return left childnode
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }
    //set temp to minimum right child val
    let temp = findMinimumVal(node.right);
    //set node.data to temp.data
    node.data = temp.data;
    //recursively replace data on nodes
    node.right = deleteNode(node.right, temp.data);
  }
  
  return node;
};

const findNode = (node, nodeToBeFound) => {
  if(node === null) return;
  
    if(nodeToBeFound === node.data) {
      console.log('Yes, tree contains node: ', node);
      return true;
    }
    let found = false;
    if (nodeToBeFound > node.data) {
      found = findNode(node.right, nodeToBeFound);
    } else if (nodeToBeFound < node.data){
      found = findNode(node.left, nodeToBeFound);
    }
    if(!found) {
      console.log('Node is not found in tree.')
    }
    return found;
};

const levelOrder = (node, fn = null, result = []) => {
  if (node === null) return;

  let queue = [];
  queue.push(node);
  result.push(node.data)
  while(queue.length > 0) {

    let current = queue.shift();
    console.log(current.data);

    if(current.left !== null) {
      queue.push(current.left);
      result.push(current.left.data)
    }
    if(current.right !== null) {
      queue.push(current.right);
      result.push(current.right.data)
    }
  }
  console.log(node)
    if(fn) {
      queue.forEach(item => {
        fn(item.data)
      })
    }
  ;

  console.log('LevelOrder:', result)
  return result;
}

const inOrder = (node, fn = null, result = []) => {
  const traverse = (node) => {
    if (node === null) return;
    traverse(node.left);
    result.push(node.data);
    traverse(node.right); 
  }
  traverse(node);

  if(fn) {
    result.forEach(fn);
  }
  console.log('InOrder:', result)
  return result;
}

const postOrder = (node, fn = null, result = []) => {
  const traverse = (node) => {
    if (node === null) return;
    traverse(node.right);
    result.push(node.data);
    traverse(node.left); 
  }
  traverse(node);

  if(fn) {
    result.forEach(fn);
  }
  console.log('PostOrder:', result)
  return result;
}

const preOrder = (node, fn = null, result = []) => {
  const traverse = (node) => {
    if (node === null) return;
    result.push(node.data);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(node);
  console.log('PreOrder:', result);
  return result;
}

const determineHeight = (node) => {

  if(node === null) return 0;
  //height is defined by the number of edges in the longest path from a given node to a leaf node
  //traverse the tree 
  // determine height of left subtree and right subtree
  // determine which is higher
  // return height

  let leftSubTreeHeight = determineHeight(node.left);
  let rightSubTreeHeight = determineHeight(node.right);
  let height = 0;

  if (leftSubTreeHeight > rightSubTreeHeight) {
    height = leftSubTreeHeight + 1; 
  }
  else {
    height = rightSubTreeHeight + 1;
  }
  console.log(height)
  return height;
 
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


const newTree = tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const toBeInsertedNode = createNode(30);
const secondInsert = createNode(6);
const thirdToInsert = createNode(24);
const fourthToInsert = createNode(20);
const fifthToInsert = createNode(2334);


insertNode(newTree, toBeInsertedNode);
insertNode(newTree, secondInsert);
insertNode(newTree, thirdToInsert);
insertNode(newTree, fourthToInsert)
insertNode(newTree, fifthToInsert)
deleteNode(newTree, 8);
findNode(newTree, 3224);
prettyPrint(newTree);
levelOrder(newTree);
inOrder(newTree);
postOrder(newTree)
preOrder(newTree)

const customFunc = (node)=> {
  node.data = 0;

  console.log(node)

  return node;
};

levelOrder(newTree, customFunc)
  
determineHeight(newTree)