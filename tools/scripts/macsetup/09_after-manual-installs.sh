#!/bin/bash


# open FCPX to make sure the later prefs work

open -a "Final Cut Pro.app"

# install FCPX first
defaults write -app "Final Cut Pro" FFDefaultStillDuration -int 2
defaults write -app "Final Cut Pro" FFImportCopyToMediaFolder -bool false
defaults write -app "Final Cut Pro" FFCreateOptimizedMediaForMulticamClips -bool false




# stop spotify from opening when you log in
defaults write com.spotify.client AutoStartSettingIsHidden -bool false

# once set up to use desktop and documents
# save screenshots to desktop
mkdir ~/Documents/_screenshots
mkdir ~/Documents/_screenshots/ll-vfx-studio
defaults write com.apple.screencapture location ~/Documents/_screenshots/ll-vfx-studio