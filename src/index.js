console.log('hi')

//Build a node class/factory
 
const createNode = (value) => {
    const node = {
        value: value,
        left: null,
        right: null
    }
    return node;
}

const tree = (array) => {
    //should have a root attribute - that uses the return value of buildtree()
    

    // const getRoot = (array) => {
    //     //find middle
    //     //root node is middle el of sorted array
    //     let start = 0;
    //     let end = array.length -1;

    //     const mid = Math.floor(array.length/2)
    //     const left = [];
    //     const right = [];

    //     console.log(mid)
    //     for (let i = 0; i < array.length; i++) {
    //         if(array[i] < mid) {
    //             left.push(array[i])
    //         }
    //         else if(array[i] > mid) {
    //             right.push(array[i])
    //         }
            
    //     }
    //     console.log(left, right)
    //     return mid;
    // };

    // getRoot(array)
    
    const buildTree = (array, start, end) => {

      if(start > end){
        return null;
      }

      let mid = Math.floor(array.length/2);
      console.log(mid)
      let rootNode = createNode(mid);

      rootNode.left = buildTree(array, start, mid -1)
      rootNode.right = buildTree(array, mid +1, end);


      return root;

      //create a node from root
      //calculate mid of left subarray make it root of left subtree
      //calculate mid of right subarray and make it root of right subtree

      //height of left subrtee and right subtree should not differ by more than one
       
  

        };
        buildTree(array);
       

    
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


tree([1, 2, 3, 4, 5, 6, 7])