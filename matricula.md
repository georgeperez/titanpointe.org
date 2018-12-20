---
title: RUMAD on macOS
layout: page
permalink: /matricula/
keywords: matricula, colegio, uprm, rum, rumad, mac, macos, sierra, macos sierra, high sierra, macos high sierra
---

## RUMAD on macOS

These are some instructions I've written up to get RUMAD working on your Mac running macOS Sierra or later.

Your **Terminal** window **might look differently from mine**. These instructions will **still work**.

### Setting up the SSH directory

<blockquote class="aside"><h4>NOTE</h4>The $ symbol indicates the <em>command prompt</em> of your <b>Terminal</b>. Everything that is <b>after</b> the $ symbol is a command. <b>DO NOT</b> include it in your commands.</blockquote>

Open a new **Terminal** window. **Terminal** is located in `/Applications/Utilities/Terminal.app`.

Type the following command to create the SSH directory: 

<pre class="code-snippet">$ mkdir ~/.ssh</pre>

Press **Return**.

Then, change the permissions of the folder to be accessible by you only. Type the following command: 

<pre class="code-snippet">$ chmod 700 ~/.ssh</pre>

Press **Return**.

Afterwards write this command:

<pre class="code-snippet">$ nano ~/.ssh/config</pre>

Press **Return**.

### Whitelisting rumad.uprm.edu

Your **Terminal** window will show a document. This document will likely be empty for you.

[![](/assets/images/nano-empty.png)](/assets/images/nano-empty.png)

This document is called the `config` file. Copy the following text:

<pre class="code-snippet">Host rumad.uprm.edu
  KexAlgorithms +diffie-hellman-group1-sha1
  HostKeyAlgorithms +ssh-dss</pre>

Go to the **Terminal** window that contains the document <code>config</code>. Paste the copied text with the keyboard shortcut `Command+V`.

Your `config` file should look like the screenshot below.

[![](/assets/images/nano-config.png)](/assets/images/nano-config.png)

Save your changes using the `Control+O` keyboard shortcut (when it asks you for a name for the document, just press **Return**), then close the text editor by using `Control+X`.

### Testing out the connection

Connect to `rumad.uprm.edu` using the following command: 

<pre class="code-snippet">$ ssh estudiante@rumad.uprm.edu</pre>

Press **Return**. If everything is working correctly, you should see a <em>password prompt</em> for the user <code>estudiante</code>.

<blockquote class="aside">If this is your first time connecting to <code>rumad.uprm.edu</code> you'll see a message to accept the authenticity of its key fingerprint. Just type "<code>yes</code>" and press <b>Return</b>.</blockquote>

[![](/assets/images/login.png)](/assets/images/login.png)

Since `estudiante` does not have a _password_, press **Return** again.

[![](/assets/images/end.png)](/assets/images/end.png)

If everything was done correctly, your **Terminal** will show the user menu for the **Sistema Estudiantil Colegial**.

If the instructions above don't work for you, you're going to need to enter the following command _**every time**_ you want to connect to <code>rumad.uprm.edu</code> in **Terminal**:

<pre class="code-snippet">ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-dss estudiante@rumad.uprm.edu</pre>

Press **Return**.

Using the previous command, your Mac should connect to `rumad.uprm.edu`.

Please send any questions or feedback to [my email](mailto:{{ site.email }}).
