#!/bin/bash

MESSAGE=`$2`
git add -A;
git commit -m "{$MESSAGE}";
git push origin master;