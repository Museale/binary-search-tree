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
console.log(nodeToInsert.data, node.data)
  // if value is less than root -- go to left subtree
  // else go to right subtree
  if (node !== null) {
    if(node.data < nodeToInsert.data) {
      insertNode(node.right, nodeToInsert)

      if(node.right === null) {
        node.right = nodeToInsert;
      }
    } else {
      insertNode(node.left, nodeToInsert)
      console.log(node)
      if(node.left === null) {
        node.left = nodeToInsert;
      }
    }
 
  }
  
}
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

prettyPrint(newTree)

insertNode(newTree, toBeInsertedNode)
insertNode(newTree, secondInsert)


prettyPrint(newTree)
