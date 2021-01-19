class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let targetNode = this.root;
      let found = false;

      while (!found) {
        if (targetNode.value > value) {
          if (!targetNode.left) {
            targetNode.left = newNode;
            found = true;
          } else {
            targetNode = targetNode.left;
          }
        } else {
          if (!targetNode.right) {
            targetNode.right = newNode;
            found = true;
          } else {
            targetNode = targetNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    return this._findValueInTree(value, this.root);
  }

  _findValueInTree(value, node) {
    if (!node) return null;
    if (node.value === value) return node;
    if (node.value > value) return this._findValueInTree(value, node.left);
    if (node.value < value) return this._findValueInTree(value, node.right);
  }

  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(6));
//JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





