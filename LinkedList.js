import {Node} from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
    };
    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else if (this.head.nextNode === null) {
            this.head.nextNode = new Node(value);
        } else if (this.head.nextNode !== null) {
            let traverse = true;
            let tempNode = this.head.nextNode;
            while (traverse) {
                let currNode = tempNode;
                if (currNode.nextNode === null) {
                    currNode.nextNode = new Node(value);
                    traverse = false;
                } else if (currNode.nextNode !== null) {
                    tempNode = currNode.nextNode;
                }
            }
        }
    };
    size() {
        let returnSize = 0;
        let traverse = true;
        let currNode = this.head;
        while (traverse) {
            if (currNode.nextNode !== null) {
                returnSize++;
                currNode = currNode.nextNode;
            } else if (currNode.nextNode === null) {
                returnSize++;
                traverse = false;
            }
        }
        return returnSize;
    }
};