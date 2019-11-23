---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

After 3 years, the CTI has upgraded the servers that run the RUMAD (Matricula) system. As a consequence of this change, when you trying to reconnect after November 11, 2019 you will see the following warning message:

[![RUMAD fingerprint](/assets/images/known_hosts_warning.png)](/assets/images/known_hosts_warning.png)

To fix this, simply copy and paste the following command in **Terminal**:

<pre class="code-snippet">ssh-keygen -R rumad.uprm.edu</pre>

Press **Return**. This will regenerate the RUMAD key.

Once this is done, reconnect to `rumad.uprm.edu` using the following command (copy and paste into your Terminal window):

<pre class="code-snippet">ssh estudiante@rumad.uprm.edu</pre>

Press **Return**. You will connect to the RUMAD system successfully. If you are still having issues, please email me with as many screenshots as you can (you can find my email at the end of this page).

I've included a video of the instructions above.

<iframe width="640" height="360" src="https://www.youtube.com/embed/nc8t0ira7LA?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<blockquote><h4>NOTE</h4>Please send questions or feedback <b>ONLY IF YOU FOLLOWED THESE INTRUCTIONS COMPLETELY (BOTH COMMANDS)</b> to <a href="mailto:{{ site.email }}">my email</a>. I will not answer support questions from people that clearly did not run the entirety of the instructions OR didn't watch the video. I will not help with <code>ssh_config</code> problems, as they are not described here. If you'd like to send a tip, you can do so by using either <a href="https://support.apple.com/apple-cash">Apple Cash</a>, <a href="http://cash.app/$georgeperezmarrero">Cash App</a>, <a href="https://www.venmo.com/georgeperez">Venmo</a>, or ATH M&oacute;vil at (787) 421-0026.</blockquote>

<br>
