#!/bin/sh

assert-changelog-update --quiet
status=$?

assert-version-bump --quiet
status=$(( $status + $? ))

npm audit
status=$(( $status + $? ))

if [ $status -eq 0 ]
then
  exit 0
else
  exit 1
fi
