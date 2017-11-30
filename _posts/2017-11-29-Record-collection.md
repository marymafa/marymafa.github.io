
---
layout: post
title: Record Collection
date: 2017-11-29
---

### Record Collection

In this challenge i were  given a JSON object representing a part of  musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

I were suppose to Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

### Code Explanation:

First checks if prop is equal to tracks AND if value isn't a blank string. If both tests pass, value is pushed into the tracks array.
If that first check doesn't pass, it next checks only if value isn't a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists. If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.

### My Approach

Method 1

Firstly ,  I created a variable called collection that stores ecach albulm that has several properties and unique  id number as its key.

Method 2

