
---
layout: post
title: Validation
date: 2017-11-28
---

### Telephone check

I want continue with this chalenge because i didn't finish it like it was returning all false insteadd of returning true if is valid and false if is invalid, So I went and look-up on what it is. I’m going to start by creating a variable where the regular expression will be stored, we’ll get to the actual function later. First, let’s make sure that if we get a country code, it’s equal to 1. To achieve this, I’m going to use the ^ symbol, which matches the beginning of a string. Then, we type in 1, since that’s what we actually want at that position. Since the country code is optional, using the ? symbol after it will match  zero or one of the preceding element:
