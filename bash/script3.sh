#!/bin/bash

echo "parameterek szama:" $#
echo "elso parameter:" "$1"
echo "parancs neve:" "$0"

VAR=1

for i in $@
do
	echo $VAR $i
	(( VAR= VAR + 1 ))
done

