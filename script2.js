var name;   //Name of the person    
var message;//Message of the person

var div;    //This will show the messages

function addMessage() {
    name = document.getElementById("firstname").value; //Getting name and message from user
    message = document.getElementById("message").value;

    addObjectToJson();  //as soon as we get the name and number, we will send XHR request using this method

    showAllMessages(); //method to show all the messages

    div = document.getElementById("newDiv");
}

function showAllMessages() {
    setInterval(function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "/~prakul/storage.json");

        xhr.onload = function () {

            var data = xhr.responseText;
            data = JSON.parse(data);

            div.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var str = "<button onclick='deleteMessage(" + i + ")'>Delete</button>";
                div.innerHTML += "Name: " + data[i].name + " Message: " + data[i].message + " " + str + "<br>";
            }
        }

        xhr.send();

    }, 2000);
}

function deleteMessage(index) {
    div = document.getElementById("newDiv");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/~prakul/cgi-bin/deleteMessage.cgi", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send(index);

    showAllMessages();
}

function addObjectToJson() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/~prakul/cgi-bin/readWrite.cgi", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send('name=' + name + '&' + 'message=' + message);
}

