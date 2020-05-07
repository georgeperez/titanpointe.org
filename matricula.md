---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

<div style="padding:72.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/387312010?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<br>

<blockquote>Please send questions or feedback <b>ONLY IF YOU FOLLOWED THESE INTRUCTIONS COMPLETELY (BOTH COMMANDS)</b> to <a href="mailto:{{ site.email }}">my email</a>. I will not answer support questions from people that clearly did not run the entirety of the instructions OR didn't watch the video. I will not help with <code>ssh_config</code> problems, as they are not described here. If you'd like to send a tip, you can do so by using either <a href="https://support.apple.com/apple-cash">Apple Cash</a>, <a href="http://cash.app/$georgeperezmarrero">Cash App</a>, <a href="https://www.venmo.com/georgeperez">Venmo</a>, or ATH M&oacute;vil at (787) 421-0026.</blockquote>

After 3 years since the initial wake of the connection problem on macOS, the CTI (Centro de Tecnolog&iacute;as de Informaci&oacute;n) has upgraded the servers that run the RUMAD (Matricula) system. As a consequence of this change, when you try to reconnect after November 11, 2019 you will see the following warning message:

<picture><source srcset="/assets/images/known-hosts-warning-dark.png" media="(prefers-color-scheme: dark)"><img src="/assets/images/known-hosts-warning-light.png"></picture>

To fix this, simply copy and paste the following command in **Terminal**:

<pre class="code-snippet">ssh-keygen -R rumad.uprm.edu</pre>

Press **Return**. This will regenerate the RUMAD key.

Once this is done, reconnect to `rumad.uprm.edu` using the following command (copy and paste into your Terminal window):

<pre class="code-snippet">ssh estudiante@rumad.uprm.edu</pre>

Press **Return**. You will connect to the RUMAD system successfully. If you are still having issues, please email me with as many screenshots as you can.

<br>
