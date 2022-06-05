#!/bin/bash


# killall Dock

echo "done"


# install FCPX first
defaults write -app "Final Cut Pro" FFDefaultStillDuration -int 2
defaults write -app "Final Cut Pro" FFImportCopyToMediaFolder -bool false
defaults write -app "Final Cut Pro" FFCreateOptimizedMediaForMulticamClips -bool false
