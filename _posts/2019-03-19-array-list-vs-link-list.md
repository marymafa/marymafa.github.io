
---
post: layout
title: Array list vs Link list
date: 2019-03-19
---

### Array list

Array is a datatype which is widely implemented as a default type, in almost all the modern programming languages, and is used to store data of similar type. Array supports Random Access, which means elements can be accessed directly using their index, like arr[0] for 1st element, arr[6] for 7th element etc. In an array, elements are stored in contiguous memory location or consecutive manner in the memory. In array, Insertion and Deletion operation takes more time, as the memory locations are consecutive and fixed. In array, each element is independent and can be accessed using it's index value.

### Link list

Linked List is an ordered collection of elements of same type, which are connected to each other using pointers. Linked List supports Sequential Access, which means to access any element/node in a linked list, we have to sequentially traverse the complete linked list, upto that element.In a linked list, new elements can be stored anywhere in the memory.Address of the memory location allocated to the new element is stored in the previous node of linked list, hence formaing a link between the two nodes/elements.Size of a Linked list is variable. It grows at runtime, as more nodes are added to it.
