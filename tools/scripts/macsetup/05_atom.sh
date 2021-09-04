#!/bin/bash

# uncomment if Atom not installed:
# brew cask install atom
echo "starting Atom package installs"

apm install document-outline
# apm install atom-html-preview
# apm install browser-plus
# apm install markdown-preview-plus
# apm install markdown-folding
apm install wordcount
apm install teletype
apm install file-icons
apm install atom-beautify
apm install minimap
apm install atom-clock
apm install autoclose-html
apm install language-ejs
apm install language-markdown
apm install react
apm install todo-show
apm install pigments
apm install linter-eslint
apm install project-manager
apm install highlight-selected
apm install expose
apm install compare-files
apm install color-picker
# apm install prettier-atom
# apm install atom-easy-jsdoc
apm install split-diff
apm install minimap-split-diff

echo "all done"
