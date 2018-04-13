

---
layout: post
title: Relative Paths
date: 2018-04-10
---

### Relative Paths

A relative path is a way to specify the location of a directory relative to another directory.  For example, suppose your documents are in C:\Sample\Documents and your index is in C:\Sample\Index.  The absolute path for the documents would be C:\Sample\Documents.  The relative path from C:\Sample\Index to C:\Sample\Documents would be ..\Documents.

When documents are on the same drive as the index, dtSearch will automatically use relative paths to store document locations.  If you add c:\Sample\Documents\smith.doc to an index in c:\Sample\Index, the index will store the document path as ..\Documents\smith.doc.  The relative path is more flexible because, if you move the entire C:\Sample directory to another location such as J:\Sample or C:\Smith\Sample or H:\Sample, the relative paths to the documents would remain valid. 

Relative paths are useful for shared indexes on networks when a physical drive uses a different drive letter for different users.  (For example, some users might see a drive as S: while other users see it as T:.  On a peer-to-peer network, one user's C: drive might be another user's K: drive.) As long as documents reside on the same drive as their index, dtSearch can use relative paths to prevent such drive mapping problems.

Relative paths are also useful for text database publishers who want to distribute a package with text and an index.  If the index is built using the relative paths option, users will be able to install the package on any drive and in any directory without affecting the validity of the index. The table of indexes in an index library stores index directories relative to the location of the index library. 


