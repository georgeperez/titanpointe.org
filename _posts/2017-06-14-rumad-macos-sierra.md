---
title: How to get RUMAD working on macOS
layout: post
date: 2017-06-14 23:14:50 TZ
keywords: matricula, colegio, putty uprm, putty matricula, putty colegio, uprm, rum, mac, macos, sierra, macos sierra, macos high sierra
last_modified_at: 2018-02-27 23:00:00 TZ
---

If you've had problems with RUMAD on macOS, I've made available instructions on how to fix it. Available in English [here](/matricula/).

### Backstory

When macOS 10.12 Sierra was released in late  2016, Apple updated its internal OpenSSH library which unfortunately caused problems with the decaying infrastructure UPRM has. Namely, this new library deprecated `diffie-hellman-group1-sha1` keys and `ssh-dss` algorithms, which are precisely what UPRM's "matricula" system (class enrollment) offers. When people on macOS Sierra and up tried connecting to `rumad.uprm.edu` they instead got an error that they couldn't connect.[^1]

When I faced this problem with my own Mac, I just added the `rumad.uprm.edu` host to my `config` file (short for configuration). Out of mind, out of sight. I emailed my university's IT department and reported the problem. They replied that they were aware and would update their support pages "soon."  

Come June 2017. Many Mac users started to ask on social media websites what was going on because their computers weren't able to connect to the class enrollment system. I went to the IT department's website to see if they had done either one of two things: update the instructions or update the keys/algorithms its server offered. Turns out, they did neither. So, I decided to take it upon myself to write on how to get RUMAD working on macOS Sierra. If you're a fellow Colegial with a Mac, this tutorial is for you.  

[^1]: If you want to read more about this, here's the relevant document on [OpenSSH Legacy](https://www.openssh.com/legacy.html)
