#!/bin/bash

if ! [ -f "adatok.dat" ]
then
	echo " nem létezik!"
	exit 1
fi

echo "Add meg a sorszámot!"

read SORSZAM
REKORDOK=`wc -l adatok.dat | cut -f 1 -d " "`
echo $REKORDOK
if [ $SORSZAM -ge $REKORDOK ];
then
	echo "Túl nagy sorszám!"
	exit 1
fi

FELHASZNALO=`egrep "^$SORSZAM;.*" adatok.dat`
echo $FELHASZNALO
nev=`echo $FELHSZNALO cut -d ";" -f 2 `
echo $nev
szulhely=`echo $FELHSZNALO cut -d ";" -f 3 `
szulido=`echo $FELHSZNALO cut -d ";" -f 4 `
anyjaneve=`echo $FELHSZNALO cut -d ";" -f 5 `
leénykori=`echo $FELHSZNALO cut -d ";" -f 6 `
lakhely=`echo $FELHSZNALO cut -d ";" -f 7 `
nem=`echo $FELHSZNALO cut -d ";" -f 8`
csaladillapot=`echo $FELHSZNALO cut -d ";" -f 9 `
gyermekekszama=`echo $FELHSZNALO cut -d ";" -f 10 `

mostaniEv=`date +%Y`
szulEv=`echo $szulido | cut -f 1 -d " "
echo "Ennyi idős" $((mostaniEv - SzulEv))
