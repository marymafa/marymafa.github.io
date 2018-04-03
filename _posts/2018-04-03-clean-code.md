
---
layout: post
title:Clean code
date: 2018-04-03
---

### Clean code

Clean code is code that is easy to understand and easy to change. ... Easy to understand means the code is easy to read, whether that reader is the original author of the code or somebody else. It's meaning is clear so it minimizes the need for guesswork and possibility for misunderstandings.



### Characteristics of a Clean code:

1. It should be elegant — Clean code should be pleasing to read. Reading it should make you smile the way a well-crafted music box or well-designed car would.

2. Clean code is focused —Each function, each class, each module exposes a single-minded attitude that remains entirely undistracted, and unpolluted, by the surrounding details.

3. Clean code is taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared.

4. Runs all the tests

5. Contains no duplication

6. Minimize the number of entities such as classes, methods, functions, and the like.


### Comments

If you are writing comments to prove your point, you are doing a blunder. Ideally, comments are not required at all. If your code needs comments, you are doing something wrong. Our code should explain everything. Modern programming languages are English like through which we can easily explain our point. Correct naming can prevent comments. 


### Error Handling is one thing 

A function should do one thing. Error handling is one another thing. If a function has to try keyword then it should be the very first keyword and there should be nothing after the catch/finally blocks.

### Function arguments

A function shouldn’t have more than 3 arguments. Keep it as low as possible. When a function seems to need more than two or three arguments, it is likely that some of those arguments ought to be wrapped into a class of their own. Reducing the number of arguments by creating objects out of them may seem like cheating, but it’s not.

### Class Names 

Classes and objects should have noun or noun phrase names like Customer, WikiPage, Account, and AddressParser. Avoid words like Manager, Processor, Data, or Info in the name of a class. A class name should not be a verb.

### Method Names 

Methods should have verb or verb phrase names like post payment, deletePage, or save. Accessors, mutators, and predicates should be named for their value and prefixed with getting, set.

### conclusion

. We all know that even the bad code works. But it takes time and resources to make a program good.






