import { BSTNode } from './bst-node';

export class BST<T> {
  root: BSTNode<T> | null = null;

  insert(data: T) {
    const newNode = new BSTNode(data);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (newNode.data === temp.data) return undefined;
      if (newNode.data < temp.data) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(data: T) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (data < temp.data) {
        temp = temp.left as BSTNode<T>;
      } else if (data > temp.data) {
        temp = temp.right as BSTNode<T>;
      } else {
        return true;
      }
    }

    return false;
  }
}