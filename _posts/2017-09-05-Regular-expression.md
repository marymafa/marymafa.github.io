---
layout: post
title: Regular Expression
date: 2017-09-05
---

### Regular expression 

*Is a pattern describing a certain amount of text or is a special text string for describing a search  pattern.

*  Their name comes from the mathematical theory on which they are based.

*Str.replace(/\s/g,") and Str.replace(/\s+/g,") it i sused to remove spaced from  the string and both will return correct  result.

*When you first start learning and playing about with regular expressions you will regularly create expressions which do not work properly. Either they will match many things they shouldn't, or they will match nothing. When this happens don't worry. It's part of learning and it's generally easy to get yourself out of trouble. I find the following approach to be effective for fixing oddly behaving regular expressions.

*Break the regular expression down into it's individual components (So for instance, in the regular expression example above it would become b and [ia]).
*Speak out aloud the steps of the expression. So for the above expression I might say: "First it matches a b, followed by either an i or an a" (This step may sound silly but trust me it works. You use different parts of your brain when you speak as opposed to think internally.)
*Build the regular expression incrementally, testing as you go.


