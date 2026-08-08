import {LinkedList} from "./LinkedList.js";

const myLinkedList = new LinkedList();

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);

// console.log("pop -> ", myLinkedList.pop());

// console.log(myLinkedList.findIndex(2));
console.log(myLinkedList.toString());