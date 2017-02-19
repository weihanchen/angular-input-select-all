#!/bin/bash

# variables
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
TARGET_FOLDER="public"
GITHUB_REPO="@github.com/weihanchen/angular-input-select-all.git"
FULL_REPO="https://$GITHUB_TOKEN$GITHUB_REPO"

# config
git config --global user.email "${GITHUB_MAIL}"
git config --global user.name "${GITHUB_USER}"

#deploy
git clone $FULL_REPO $TARGET_FOLDER
cd $TARGET_FOLDER
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ../
cp examples/* $TARGET_FOLDER
# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi
git add .
MESSAGE=`date +\ %Y-%m-%d\ %H:%M:%S`
git commit -m "Site updated:${MESSAGE}"
git push --force "https://${GITHUB_TOKEN}${GITHUB_REPO}" $SOURCE_BRANCH:$TARGET_BRANCH > /dev/null 2>&1