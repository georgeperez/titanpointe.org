---
title: How to get matricula working on macOS Sierra
layout: post
date: 2017-06-14 23:14:50 TZ
external-url: https://george.perez-marrero.com/matricula/
---

Late last year with the release of macOS 10.12 Sierra, Apple updated its internal binary for OpenSSH. This new OpenSSH update brought changes to the way it handles `diffie-hellman-group1-sha1` keys and `ssh-dss` algorithms. This meant that anyone that tried to connect to the "matricula" system (class enrollment system in UPRM) they were meant with an error that both `diffie-hellman-group1-sha1` keys and `ssh-dss` were depreciated. When I faced this problem with my own Mac, I just added the `rumad.uprm.edu` host to my config file. Out of mind, out of sight. I emailed my university's CTI (the department in charge of the campus network and computers) and told them about the problem. They replied that they were aware and would update the support pages "soon." 

Come June 2017. Many Mac users started to ask on social media websites what was going on. I went to the CTI's website to see if they had done either one of two things: update the instructions or update the keys/algorithms its server offered. Turns out, they did neither. So, I decided to take it upon myself to write on how to get RUMAD working on macOS Sierra. If you're a fellow Colegial with a Mac, this tutorial is for you.

I provided both [English](/matricula) and [Spanish](/matricula/es) versions.
