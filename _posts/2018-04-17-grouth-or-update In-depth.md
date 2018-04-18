

---
layout: post
title:Growth/Update In-depth
date: 2018-04-17
---
### Growth/Update In-depth

Once our Component is mounted in the Birth phase, we are prepped and ready for the Growth/Update phase. The Growth phase is where a Component spends most of its time. Here we get data updates, act on user or system actions and provide the overall experience for our application.

The Growth phase is triggered in three different ways: changing of props, changing of state or calling forceUpdate(). The changes that are made affect how the Update phase is managed. We will discuss each of these changes in depth as we walk through the entire Growth process.

### Starting Update: setState()

Similar to changing props, when a Component changes its state value1 via this.setState(), this also triggers a new Update phase. For a lot of React developers, the first major (and to be honest ongoing) challenge is managing state in Components. The state itself can be a controversial topic in the community. Many developers avoid state at all cost. Other systems, such as MobX, are in essence trying to replace it. Many uses of state can fall into different anti-patterns, such as transferring props into state2.

Fundamentally, the state can be a tricky and confusing topic. When do we use state? What data should or shouldn't be stored in the state? Should we even use state at all? To be honest, this is a topic that we are still trying to grapple with ourselves.

With Component state, I consider this internal functionality. In theory, I can access and even edit state outside of the instance but this is an anti-pattern. Accessing a Component's state from outside injects a lot of fragility into the system (pathing dependency, changing of internal values, etc.). Only a Component instance should setState() on itself. 
