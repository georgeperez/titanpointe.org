---
title: How to get RUMAD working on macOS Sierra
layout: post
date: 2017-06-14 23:14:50 TZ
external-url: /matricula/
last_modified_at: 2017-12-18 14:40:14 TZ
keywords: matricula, colegio, uprm, rum, mac, macos, sierra, macos sierra
excerpt_separator: <!--MORE-->
description: "Get ahead of those pesky SSH errors"
---

Late last year with the release of macOS 10.12 Sierra, Apple updated its internal OpenSSH library. This OpenSSH update brought changes to the way it handles `diffie-hellman-group1-sha1` keys and `ssh-dss` algorithms. Mainly, anyone that tried to connect to UPRM's "matricula" (class enrollment system) they were met with an error that both `diffie-hellman-group1-sha1` keys and `ssh-dss` were depreciated.<!--MORE-->[^1]

When I faced this problem with my own Mac, I just added the `rumad.uprm.edu` host to my `config` file (short for configuration). Out of mind, out of sight. I emailed my university's IT department and reported the problem. They replied that they were aware and would update their support pages "soon."  

Come June 2017. Many Mac users started to ask on social media websites what was going on because their computers weren't able to connect to the class enrollment system. I went to the IT department's website to see if they had done either one of two things: update the instructions or update the keys/algorithms its server offered. Turns out, they did neither. So, I decided to take it upon myself to write on how to get RUMAD working on macOS Sierra. If you're a fellow Colegial with a Mac, this tutorial is for you.  

It's available in [English](/matricula/) and [Spanish](/matricula/es/).

[^1]: If you want to read more about this, here's the relevant document on [OpenSSH Legacy](https://www.openssh.com/legacy.html).
