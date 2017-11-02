---
layout: post
date: 2017-09-15
title: Simple design

### Simple Design

*It might be called “simple design” but it’s not always simple to put into practise. It takes effort, multiple iterations and new insights to improve it bit by bit.

*The intention of simple design is that it will be easy to change, being adaptable to the changing needs.

### four rules of simple design

*TESTS PASS
If you can’t prove that your system works and does what it is required to do then it doesn’t really matter if your design is simple or complex. It will also be harder to maintain and bugs tend to creep in undetected.


*	EXPRESSES INTENT
When you look at a piece of code it should immediately tell you what it does and it shouldn’t surprise you. Variable, method, and class names should describe what they do. This is also refered to as the principle of least astonishment or the element of least surprise.

*NO DUPLICATION (DRY)
The application shouldn’t contain any knowledge duplication, also known as “Don’t Repeat Yourself” (DRY). This doesn’t mean code duplication in the literal sense. Two loops might look very similar but their intention can be very different. It’s about knowledge duplication, duplication of concepts. No duplication of knowledge and what it represents in the domain and making sure those are isolated in one place.



*SMALL
The application shouldn’t have pieces that you don’t need. Remove any dead code, resist the urge to design for the future things you are not sure of you need.sometimes it’s hard to see similarities in knowledge when being focused on the details. For this reason it’s good to occasionally take a step back and evaluate the result.

