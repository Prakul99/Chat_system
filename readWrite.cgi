#!/usr/bin/python3

import sys
import json

from os import environ

names = sys.stdin.readlines()

nameDict = {}
if names[0] is not None:
    for keyValuePair in names[0].split('&'):
        (key, value) = keyValuePair.split('=')
        nameDict[key] = value 

textFile = open('../storage.json','r')

js = textFile.read()
js = json.loads(js)

object = { 
           "iD": len(js), 
           "name": nameDict.get('name'),
           "message": nameDict.get('message') 
           }

js.append(object)
js = json.dumps(js)
textFile.close()

textFile = open('../storage.json','w')

textFile.write(js)
textFile.close()



