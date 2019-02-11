#!/bin/bash

#echo "$#"
#echo  $@

if [ $1 -lt 1 ] || [ $2 -lt 1 ]
	echo "cica"
fi

if [ $# -eq 2 ]; then 
	echo "Ez ket parameter!"
else echo "Ez nem ket parameter!"
fi


if [ $1 -lt $2 ]; then
	echo $1
else echo $2
fi


if [ $(($1 % 2)) -ne 0 ] || [ $(($2 % 2)) -ne 0 ]; then
	echo "Az egyik szám páratlan!"
fi
