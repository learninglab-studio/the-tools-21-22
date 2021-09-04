#!/bin/bash


echo "done installing stuff on this script."
echo "there are a couple of things to take care of though."


read -p "have you opened up Unreal to disable auto-open on startup? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "ok."
else
  echo "ok--take care of that eventually?"
fi

read -p "have you opened up Adobe CC to log in?" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "ok."
else
  echo "ok--take care of that eventually?"
fi


echo "remember to install heroku from the web"

echo "done"
