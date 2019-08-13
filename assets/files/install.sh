#!/bin/sh

mkdir ~/.ssh
chmod 700 ~/.ssh
cd ~/.ssh && { curl -sSLO https://user.fm/files/v2-233b586b0a2f5e83843e4c621cc996de/config ; cd ~; }
if [ -f ~/.ssh/config ]; then
    echo "Success! Close this Terminal window and open a new one to reload the shell."
else
    echo "Something went wrong. Please email george@perez-marrero.com for support."
fi
