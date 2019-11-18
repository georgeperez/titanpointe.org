---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

<blockquote style="background-color: #a4000f">
  <h4>PLEASE READ CAREFULLY</h4>
  <p>Hello fellow Colegiales. Please read this red box and the next blue box completely. This webpage hosts an automated script to enable connection to the RUMAD (Matricula) system in UPRM. <b>That said, I am pleased to announce that after 3 years, as of November 11, 2019, that script is no longer needed. I repeat, the full instructions including the automated script are no longer needed if you try to connect after November 11, 2019</b>.</p>

  <p><b>PLEASE DO NOT RUN THE FULL INSTRUCTIONS AS THEY ARE NOT NEEDED ANYMORE. ONLY FOLLOW THE INSTRUCTIONS IN THE NEXT BLUE BOX</b>.</p>

  <p><b><em>Please follow the next update to learn how to fix an issue that you should see starting November 11, 2019 as a result of this change</em></b>.</p>

  <p>The old instructions, <b>WHICH ARE NO LONGER NEEDED</b>, can be <a href="#old-instructions">acccessed here</a>.</p>
</blockquote>

<blockquote id="new-instructions" style="background-color: rgb(0, 122, 255);">
  <h4>NEW SHORTENED INSTRUCTIONS</h4>
  <p>After 3 years, the CTI has servers that run the RUMAD (Matricula) system. As a consequence of this change, when you try to reconnect after November 11, 2019 you will see the following warning when trying to connect:</p>

  <p><a href="/assets/images/known_hosts_warning.png"><img src="/assets/images/known_hosts_warning.png" alt="RUMAD fingerprint"></a></p>

  <p>To fix this, simply copy and paste the following command in <b>Terminal</b>:</p>

  <pre class="code-snippet">rm -rf ~/.ssh/known_hosts</pre>

  <p>Press <b>Return</b>. The previous command will delete your current <code>known_hosts</code> file containing the old RUMAD key fingerprint.</p>

  <p>Reconnect to <code>rumad.uprm.edu</code> using the following command:</p>

  <pre class="code-snippet">ssh estudiante@rumad.uprm.edu</pre>

  <p>Press <b>Return</b>. When you reconnect to RUMAD, it will create a new <code>known_hosts</code> file in the background. After this you should get a successful connection. If you are still having issues, <a href="mailto:{{ site.email}}">please email me</a> with as many screenshots as you can.</p>

  <p>I've included a video of me following the instructions above. Please put the video quality at above 720p to see clearly.</p>

  <iframe src="https://player.vimeo.com/video/373949252" width="610" height="444" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

</blockquote>

<blockquote><h4>NOTE</h4>Please send any questions or feedback to <a href="mailto:{{ site.email }}">my email</a>. If you'd like to tip me, you can do so by using either <a href="https://support.apple.com/apple-cash">Apple Cash</a>, <a href="http://cash.app/$georgeperezmarrero">Cash App</a>, <a href="https://www.venmo.com/georgeperez">Venmo</a>, or ATH M&oacute;vil at (787) 421-0026.</blockquote>

<div id="old-instructions"></div>

<h3 style="color: red; text-align: center"><b>STOP</b></h3>

<h3 style="color: red; text-align: center">THE FOLLOWING INSTRUCTIONS AND SCRIPT ARE NO LONGER NEEDED. PLEASE FOLLOW THE INSTRUCTIONS ABOVE.</h3>

<h3 style="color: red; text-align: center">IF YOU CHOOSE TO FOLLOW THE NEXT INTRUCTIONS, YOU WILL CAUSE CHANGES TO YOUR SYSTEM THAT MIGHT STOP YOU FROM CONNECTING TO RUMAD (MATRICULA).</h3>

<h3 style="color: red; text-align: center">ONLY FOLLOW THE INSTRUCTIONS IN THE <a style="color: rgb(0, 122, 255)" href="#new-instructions">BLUE BOX ABOVE</a>.</h3>

<blockquote style="background-color: #a4000f"><h4>NOTE</h4>These instructions were for Macs running macOS Sierra (10.12.x) or later <b>ONLY</b>. To verify your current macOS version, choose Apple menu > About This Mac and see which version you're running. If it's 10.11 or below, you <b>DO NOT</b> need to run this script. Do not run this on your El Capitan or earlier Mac or it will break things. Your pre-Sierra Mac should connect with no issues to RUMAD. If not, please email me.</blockquote>

I've written up a very small script to get RUMAD working on your Mac running macOS Sierra or later. The instructions are very simple, and should result in no modifications of your other system settings.

First things first. You'll need to open a **Terminal** window. Chances are, you're already there because you're trying to connect to `rumad.uprm.edu` but seeing an error. If you aren't and are not sure what this app is and where to find it, app that is built-in to all Macs that provides a view to the system shell. You can find this app by navigating to your Applications folder, then Utilities folder, and double clicking on `Terminal.app`. The full directory is `/Applications/Utilities/Terminal.app`.

Your **Terminal** window **might look differently from mine**. This script, however, will **still work**.

Once you've opened a **Terminal** window, all you need to do is copy and paste the following command in the Terminal window:

<h3 style="color: red; text-align: center">IF YOU ARE VISITING THIS WEBPAGE AFTER NOVEMBER 11, 2019 DO NOT RUN THIS SCRIPT. IT IS NO LONGER NEEDED. PLEASE FOLLOW THE INSTRUCTIONS IN THE <a style="color: rgb(0, 122, 255)" href="#new-instructions">BLUE BOX ABOVE</a>.</h3>

<pre class="code-snippet">curl -sSL https://titanpointe.org/assets/files/install.sh | bash</pre>

Press **Return** after pasting.

### Testing out the connection

Connect to `rumad.uprm.edu` using the following command:

<pre class="code-snippet">ssh estudiante@rumad.uprm.edu</pre>

Press **Return**.

[![RUMAD fingerprint](/assets/images/fingerprint.png)](/assets/images/fingerprint.png)

<blockquote>If this is your first time connecting to <code>rumad.uprm.edu</code>, you'll see the above message asking you to accept the authenticity of RUMAD's key fingerprint. This is a lot of technical talk, but you just need to type "<code>yes</code>" and press <b>Return</b>.</blockquote>

If everything is working correctly, you should see a *password prompt* for the user `estudiante`.

[![RUMAD log in screen](/assets/images/login.png)](/assets/images/login.png)

Since `estudiante` **does not** have a _password_, press **Return** again.

[![RUMAD Connection](/assets/images/end.png)](/assets/images/end.png)

If everything was done correctly, your **Terminal** will show the user menu for the **Sistema Estudiantil Colegial**.

If the script above doesn't work for you, you're going to need to enter the following command _**every time**_ you want to connect to <code>rumad.uprm.edu</code> in **Terminal**:

<pre class="code-snippet">ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-dss estudiante@rumad.uprm.edu</pre>

You can copy and paste the above command. Press **Return**.

Using the previous command, your Mac should connect to `rumad.uprm.edu`.

<br>
