#!/bin/bash

# This script is for OS X and should not be executed
# This is a consolidatation of all commands for easier copying and pasting

# Backup current ssh folder
cp -a ~/.ssh ~/ssh-backup

# Go ahead and generate a strong pass phrase for your SSH keys using 1Password or another tool
open -a 1Password

# Generate new SSH key pair with a passphrase
ssh-keygen -t rsa -b 4096 -C "your_email@email.com" -f ~/.ssh/id_rsa

# Start the ssh-agent
eval "$(ssh-agent -s)"

# Add newly generated SSH key to the SSH agent and add to OS X Keychain
ssh-add -K ~/.ssh/id_rsa

# Add your public SSH Key to your Github account - do manually on the website
# Emphasis on public - file extension should be .pub
pbcopy < ~/.ssh/id_rsa.pub
open https://github.com/settings/ssh

# Login to Github with the new SSH key to verify
ssh -T git@github.com -i ~/.ssh/id_rsa

# Remove old SSH key from Github
open https://github.com/settings/ssh

# Get the key fingerprint of your old public key from the backup copy
ssh-keygen -E md5 -lf ~/ssh-backup/id_rsa.pub