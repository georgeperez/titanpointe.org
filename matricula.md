---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

<blockquote style="background-color: red"><h4>UPDATE 2019-11-12</h4>The CTI has changed the infrastructure of the RUMAD system and therefore when you try to connect after November 11, 2019 you will likely see a <a href="/assets/images/known_hosts_warning.png">very scary warning (screenshot)</a> and won't let you connect to RUMAD. There's a very simple solution. You need to run the following command:

<pre class="code-snippet">rm -rf ~/.ssh/known_hosts</pre>

That will delete your current <code>known_hosts</code> file and will create a new one when you try to connect to RUMAD. After this, you should get a successful connection. You don't need to run the script below again. If you are still having issues, please email me.
</blockquote>

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
