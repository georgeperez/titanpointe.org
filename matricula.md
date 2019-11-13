---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

<blockquote style="background-color: rgb(255, 59, 48)">
  <h4>FULL INSTRUCTIONS NO LONGER NEEDED</h4>
  <p>This webpage used to host a much larger, detailed page with an automated script to enable connection to the RUMAD (Matricula) system in UPRM. After 3 years, as of November 11, 2019, the script that I wrote is no longer needed because of infrastructure changes the CTI made to the RUMAD system. I repeat, <b>the full instructions including the automated script are no longer needed</b>.</p>

  <p><b><em>Please follow the next update to learn how to fix an issue that you should see starting November 11, 2019 as a result of this change</em></b>.</p>

  <p>If you still wish to see the old webpage and its script, <a href="#old-instructions">click here</a>.</p>
</blockquote>

<blockquote style="background-color: rgb(0, 122, 255);">
  <h4>UPDATE 2019-11-12</h4>
  <p>After 3 years, the CTI has finally changed part of the infrastructure that makes up the RUMAD system. With this change, the server's key fingerprint (think of it as a computer's thumbprint) was changed as well which leads to strange behavior on Macs who had previously connected to RUMAD.</p>
  
  <p>Because of the aforementioned, starting November 11, 2019 you will start seeing the following warning when trying to connect:</p>

  <p><a href="/assets/images/known_hosts_warning.png"><img src="/assets/images/known_hosts_warning.png" alt="RUMAD fingerprint"></a></p>

  <p>Please note that this warning is working as intended but <b>you are not under attack or being spied one</b>. As a consequence of the changed infrastructure, the fingerprint was remade and your Mac has security checks that stop it from communicating with servers that might've been modified to look like an existing server.</p>

  <p>Because the "old server" had a different fingerprint, your Mac is confused as to "who" this "new server" is. To fix this, we need to remove the old fingerprint from your system.</p>

  <p>To do this, please copy the following command and run it in <b>Terminal</b>:</p>

  <pre class="code-snippet">rm -rf ~/.ssh/known_hosts</pre>

  <p>Press <b>Return</b>. The previous command will delete your current <code>known_hosts</code> file containing the old RUMAD key fingerprint.</p>

  <p>Reconnect to <code>rumad.uprm.edu</code> using the following command:</p>

  <pre class="code-snippet">ssh estudiante@rumad.uprm.edu</pre>

  <p>Press <b>Return</b>. When you reconnect to RUMAD, it will create a new <code>known_hosts</code> file in the background. After this you should get a successful connection. If you are still having issues, <a href="mailto:{{ site.email}}">please email me</a> with as many screenshots as you can.</p>
</blockquote>

<h3 id="old-instructions">THE FOLLOWING INSTRUCTIONS AND SCRIPT ARE NO LONGER NEEDED</h3>

<blockquote style="background-color: #a4000f"><h4>NOTE</h4>These instructions are for Macs running macOS Sierra (10.12.x) or later <b>ONLY</b>. To verify your current macOS version, choose Apple menu > About This Mac and see which version you're running. If it's 10.11 or below, you <b>DO NOT</b> need to run this script. Do not run this on your El Capitan or earlier Mac or it will break things. Your pre-Sierra Mac should connect with no issues to RUMAD. If not, please email me.</blockquote>

I've written up a very small script to get RUMAD working on your Mac running macOS Sierra or later. The instructions are very simple, and should result in no modifications of your other system settings.

<blockquote><h4>NOTE</h4>Please send any questions or feedback to <a href="mailto:{{ site.email }}">my email</a>. If you'd like to tip me, you can do so by using either <a href="https://support.apple.com/apple-cash">Apple Cash</a>, <a href="http://cash.app/$georgeperezmarrero">Cash App</a>, <a href="https://www.venmo.com/georgeperez">Venmo</a>, or ATH M&oacute;vil at (787) 421-0026.</blockquote>

First things first. You'll need to open a **Terminal** window. Chances are, you're already there because you're trying to connect to `rumad.uprm.edu` but seeing an error. If you aren't and are not sure what this app is and where to find it, app that is built-in to all Macs that provides a view to the system shell. You can find this app by navigating to your Applications folder, then Utilities folder, and double clicking on `Terminal.app`. The full directory is `/Applications/Utilities/Terminal.app`.

Your **Terminal** window **might look differently from mine**. This script, however, will **still work**.

Once you've opened a **Terminal** window, all you need to do is copy and paste the following command in the Terminal window:

<pre class="code-snippet">curl -sSL https://titanpointe.org/assets/files/install.sh | bash</pre>

Press **Return** after pasting. If you wish to see what I'm doing beforehand, you can view the full script here:

<script src="https://gist.github.com/georgeperez/e82bf3ffbcb0b0f523c8b758b8255e65.js"></script>

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
