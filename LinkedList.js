import {Node} from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
    };
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else if (!this.head.nextNode) {
            this.head.nextNode = new Node(value);
        } else if (this.head.nextNode) {
            let traverse = true;
            let tempNode = this.head.nextNode;
            while (traverse) {
                let currNode = tempNode;
                if (!currNode.nextNode) {
                    currNode.nextNode = new Node(value);
                    traverse = false;
                } else if (currNode.nextNode) {
                    tempNode = currNode.nextNode;
                }
            }
        }
    };
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else if (this.head) {
            const newNode = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    };
    size() {
        let returnSize = 0;
        let traverse = true;
        let currNode = this.head;
        while (traverse) {
            if (currNode.nextNode) {
                returnSize++;
                currNode = currNode.nextNode;
            } else if (!currNode.nextNode) {
                returnSize++;
                traverse = false;
            }
        }
        return returnSize;
    };
    getHead() {
        if (!this.head) {
            return undefined;
        } else if (this.head) {
            return this.head.value;
        }
    };
    getTail() {
        if (!this.head) {
            return undefined;
        } else if (this.head) {
            let traverse = true;
            let currNode = this.head;
            while (traverse) {
                if (!currNode.nextNode) {
                    return currNode.value;
                } else if (currNode.nextNode) {
                    currNode = currNode.nextNode;
                }
            }
        }
    }
    at(index) {
        if (!this.head) {
            return undefined;
        } else if (this.head) {
            let currNode = this.head;
            while(index > 0) {
                if (index === 1) {
                    return currNode.value;
                }
                else if (currNode.nextNode) {
                    index--;
                    currNode = currNode.nextNode;
                } else if (!currNode.nextNode) {
                    return undefined
                }
            }
        }
    }
    pop() {
        const nextNode = this.head.nextNode;
        const currNode = this.head;
        this.head = nextNode;
        if (currNode) {
            return currNode.value;
        } else if (!currNode) {
            return undefined;
        }
    }
    contains(value) {
        let currNode = this.head;
        let traverse = true;
        if (!this.head) {
            return false;
        }
        while(traverse) {
            if(currNode.nextNode) {
                if (currNode.value === value) {
                    return true;
                }
                currNode = currNode.nextNode;
            } else if (!currNode.nextNode) {
                if (currNode.value === value) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    findIndex(value) {
        
    }
};