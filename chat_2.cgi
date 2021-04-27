#!/usr/bin/python3



print ("content-type: text/html")
print ()
print ("<html> <body>") 
print ('<script src = "../script2.js" ></script>')
print ('<label for="firstname">You have to click on "Send" atleast once message to start the chat.</label><br>')
print ('<input type="text" id="firstname" name="firstname">')
print ('<input type="text" id="message" name="message">')
print ('<button onclick="addMessage()">Send</button>')
print ('<div id = "newDiv" ></div>')
print ("</body></html>")
