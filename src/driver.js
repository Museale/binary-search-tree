import { BST } from '.'
import { prettyPrint } from './pretty_print';

export const driver = () => {

  const randomArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100));
  console.log(randomArr)

    const tree = BST(randomArr);
    
    tree.insertNode(101);
    tree.insertNode(111);
    tree.insertNode(1001);
    tree.insertNode(110);
    tree.deleteNode(1001);
    console.log('IsBalanced: ', tree.isBalanced())
    prettyPrint(tree.root);    
    tree.reBalance();
    console.log('IsBalanced now?', tree.isBalanced());
    prettyPrint(tree.root);   
    tree.findNode(9);
    tree.levelOrder();
    tree.inOrder();
    tree.preOrder();
    tree.postOrder();
    console.log('Height: ', tree.heightOfTree());
    console.log('Depth: ', tree.depth(1))
 
};