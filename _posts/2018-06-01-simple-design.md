---
layout: post
title: Rules of simple design

Good Design?

one that is adaptable to changing needs — is the key to a “better design.” Whenever we have a choice to make, look for the choice which would be easier to change.

Coderetreat

is a day-long workshop focused on analyzing and practicing the decisions we make when writing code
The format of a standard Coderetreat is simple:

1. write code in pairs (pair programming)
2. 45-minute sessions
3. A code is deleted after each session

At the end of the day, you should know what have you learned, what surprised you and what will you improve on. 
For each session, a set of constraints is given. These constraints are generally a bit extreme. They have the goal of breaking the participants out of their usual way of thinking. Most people will begin working on a problem in the way they are comfortable. The constraints are there to remove the ability to code in a familiar, comfortable way. The urge to rush to finishing is strong. One of the goals of the morning sessions is to break this feeling, allowing people to relax into the idea of not finishing. It emphasizes enjoying the feeling of explicitly not thinking about the end but paying attention to the minute-by-minute. The separation of identity from code frees them to experiment with new ideas.


Tests Pass

It makes sense that this would be the first one. After all, if you can’t verify that your system works, then it doesn’t really matter how great your design is, does it? With the modern tools that exist, we generally mean that these tests are automated. But, notice that the rule doesn’t say “Automated Tests Pass,” just “Tests Pass.” It is about correctness and verification. Looking at this from the point of view of “easier to change,” though, you can see that the length of time it takes to make sure your “Tests Pass” can be a significant factor in making changes. 

Expresses Intent

 an important problem when you are writing, and especially when you are updating, code: it is easy for the names we give things to stray from what they represent. The first step is identifying the code related to the functionality we are addressing. Paying attention to the names and how our code expresses itself is the key to making our lives easy when we come back to it.

No Duplication (DRY)

We tend to think of duplication at a code level. Every piece of knowledge should have one and only one representation.” This rule also has been expressed as “Once and Only Once.always ask yourself whether or not the duplication you see is an example of core knowledge in the system.

Small

It is important to look back and make sure that you don’t have any extraneous pieces. Some questions I like to ask myself when I take a step back after writing some code.

* Do I have any vestigial code that is no longer used?
you build things that aren’t used in the final product. Maybe they seemed like a good idea at the time, but the capability never came to fruition. If so, no questions asked, just delete that.

* Do I have any duplicate abstractions?
 after writing code test it and see if there are duplicates, then figure it out by looking where the problem is and then fix your code.

Single Responsibility (SRP)
 At its core, SRP is another way of maximizing cohesion. After vigorously eliminating duplication and making sure that our pieces are named appropriately and expressively, you generally find that your code satisfies the SRP.

Open-Closed (OCP)

Changing code is dangerous, once you have it written and tested, you should focus on isolating knowledge, naturally building only the extension points that truly represent the pieces of your system that will change.

Liskov Substitution (LSP)

Polymorphism is a key part of a flexible design. Being able to substitute a more specific type when a general type is expected allows us to provide different behaviors without having complex branching. There is a danger, though, if the specialized type significantly changes fundamental expectations of the more general type’s behavior. A specialized type’s name should reflect that it is an enhancement of the base, not a change.

Interface Segregation

The surface area of a class has a direct influence on how easy it is to use. Although a class might have several different ways to use it, any specific client should see only those behaviors specific to its needs.

Dependency Inversion

One of the most dangerous parts when changing a system is having your changes unexpectedly influence other, unrelated parts of your system. By depending on abstractions, decoupling yourselves from concrete implementations, you can set up walls between behaviors. Abstractions better move you into standardized communication methods between components, making it easier to independently replace or change things.


Law of Demeter

the LoD is about encapsulation. We don’t want to reach inside an object and manipulate its insides; that’s just mean. Instead, we want to ask objects to perform some action for us. Let the object deal with its collaborators. A method can access either locally-instantiated variables, parameters passed in, or instance variables.
