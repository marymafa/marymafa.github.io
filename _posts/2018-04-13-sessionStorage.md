

---
layout: post 
title: sessionStorage
date: 2018-04-13
---

### sessionStorage

The sessionStorage object exists as a property of the window object in supporting browsers (currently Firefox 3+, Safari 4+, and Internet Explorer 8+). You can place data onto the sessionStorage object and that data persists for as long as that window (or tab) is open. Even if you navigate away from the page that stored the data and then navigate back, the data saved to sessionStorage is still available. Any data stored in sessionStorage is tied to the protocol, hostname, and port of the page that saved the information and only pages sharing the same protocol, hostname, and port can access that data later.

Making things more interesting, sessionStorage is unique to a particular window or tab (what the specification refers to as a “top-level browsing context”). For instance, suppose you open Yahoo! Mail in two different tabs of your browser and the application saves some data in sessionStorage. The data from the first tab is not accessible to the second tab even though the protocol, hostname, and port are exactly the same.

Data stored to sessionStorage is saved in key-value pairs where both the key and the value are strings. Non-string values are automatically converted into strings before being stored.

The data in sessionStorage is deleted once the window or tab is closed, or if the user requests that the browser do so. This behavior, combined with tying the data to a particular window or tab, ensures that data doesn’t get accidentally exposed or stored indefinitely.

### Usage

The sessionStorage object has five methods:

1. getItem(key) – retrieves the value for the given key or null if the key doesn’t exist.

2. setItem(key, value) – sets the value for the given key.

3. removeItem(key) – removes the key completely.

4. key(position) – returns the key for the value in the given numeric position.

5. clear() – removes all key-value pairs.


