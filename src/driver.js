import { BST } from '.'
import { prettyPrint } from './pretty_print';

export const driver = () => {

    const tree = BST([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

    tree.insertNode(2);
    tree.insertNode(300)
    tree.insertNode(559)
    tree.insertNode(12930)
    tree.insertNode(0)
    tree.insertNode(-3234)
    tree.insertNode(6)
    tree.insertNode(129423)
    tree.insertNode(121239148)
    tree.deleteNode(6345);
    tree.findNode(9);
    tree.levelOrder();
    tree.inOrder();
    tree.preOrder();
    tree.postOrder();
    console.log('Height: ', tree.heightOfTree());
    console.log('Depth: ', tree.depth(1))
    console.log('IsBalanced: ', tree.isBalanced())
    tree.reBalance();
    prettyPrint(tree.root);    
};