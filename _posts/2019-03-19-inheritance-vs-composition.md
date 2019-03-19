

---
post:layout
title: Inheritance vs Composition
date: 2019-03-19
---

### Inheritance

Inheritance is a reusability mechanism in object-oriented programming. With inheritance, the common properties of various objects are exploited to form relationships with each other. The abstract and common properties are provided in the superclass , which is available to the more specialized subclasses.

* Disadvantages of Inheritance:

 1. You can't change the implementation inherited from super classes at runtime (obviously because inheritance is defined at compile time).

 2. Inheritance exposes a subclass to details of its parent class implementation, that's why it's often said that inheritance breaks encapsulation (in a sense that you really need to focus on interfaces only not  implementation, so reusing by sub classing is not always preferred).

3. The tight coupling provided by inheritance makes the implementation of a subclass very bound up with the implementation of a super class that any change in the parent implementation will force the sub class to change.

4. Excessive reusing by sub-classing can make the inheritance stack very deep and very confusing too.

 

### Composition 

The term composition is not unique to Java, composition is a concept of object-oriented programming. By now you should be familiar with the concept of inheritance - inheritance requires the use of the Java keywords extends or implements. When your class inherits members from either a superclass or a superinterface, you can directly invoke or access those members.

* example

package com.tutorial.javabasic;
 
class Vehicle {
 
    public String getDetails() {
 
        return "This is vehicle details";
    }
}
 
class Car extends Vehicle {
}
 
public class CompositionExample1 {
 
    public static void main(String s[]) {
        Car c = new Car();
        String details = c.getDetails();
        System.out.println(details);
    }
}

