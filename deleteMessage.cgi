#!/usr/bin/python3

import sys
import json

from os import environ

iD = sys.stdin.readlines()

textFile = open('../storage.json','r')

js = textFile.read()
js = json.loads(js)

index = int(iD[0])
js.remove(js[index])

js = json.dumps(js)
textFile.close()

textFile = open('../storage.json','w')

textFile.write(js)
textFile.close()
