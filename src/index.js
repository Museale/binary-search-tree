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
  const rootNode = buildTree(array)

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


const newTree = tree([1,2,3,4,5,6,7,8,9,10]);

prettyPrint(newTree)