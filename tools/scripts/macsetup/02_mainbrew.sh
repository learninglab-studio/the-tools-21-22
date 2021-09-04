#!/bin/bash

#####################
# homebrew packages #
#####################

# git should already be installed by the 01_start.sh script
# brew install git



# fontforge
# making xquartz first to require pw
# brew cask install xquartz
# brew cask install fontforge

# mac app store installer
# brew install mas
# aws cli
brew install awscli

# ffmpeg (and ffprobe)
brew install ffmpeg
# youtube-dl
brew install youtube-dl

# GitHub's hub utility
brew install hub

# mysql
# brew install mysql


#########
# casks #
#########



# Chrome
brew cask install google-chrome

# Firefox
brew cask install firefox

# Dropbox
# brew cask install dropbox

# VLC
brew cask install vlc

# nvAlt
# brew cask install nvalt

# Blender
brew cask install blender

# Adobe Creative Cloud Installer (open next)
# brew cask install adobe-creative-cloud

# epic games launcher
# brew cask install epic-games

# unity
brew cask install unity-hub

# skype
# brew cask install skype

# clipgrab
brew cask install clipgrab

# heroku (then run `heroku login`)
brew tap heroku/brew && brew install heroku

# imagemagick
brew install imagemagick

# exiftool
brew install exiftool



#########
# fonts #
#########

###########
# drivers #
###########

brew tap homebrew/cask-drivers
# brew cask install nvidia-cuda
# brew cask install sonos
brew cask install spotify
# brew cask install synologyassistant
# brew cask install xbox360-controller-driver-unofficial

# ableton & max
brew cask install ableton-live-lite
brew cask install cycling74-max
