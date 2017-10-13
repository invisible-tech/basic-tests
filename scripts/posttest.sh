#!/bin/sh

assert-changelog-update --quiet
status=$?

nsp check
status=( $status + $? )

if [ $status -eq 0 ]
then
  exit 0
else
  exit 1
fi
