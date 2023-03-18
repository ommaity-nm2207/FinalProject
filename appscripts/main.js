function sendMessage(message) {
    var chatlog = document.querySelector('.chatlog');
    var messageEl = document.createElement('div');
    messageEl.className = 'message sent';
    var messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerHTML = message;
    messageEl.appendChild(messageText);
    chatlog.appendChild(messageEl);
    chatlog.scrollTop = chatlog.scrollHeight;
  }
  
  function receiveMessage(message) {
    var chatlog = document.querySelector('.chatlog');
    var messageEl = document.createElement('div');
    messageEl.className = 'message received';
    var messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerHTML = message;
    messageEl.appendChild(messageText);
    chatlog.appendChild(messageEl);
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  receiveMessage("000110")

  whoIsThis = document.getElementById("button-1");
  whoIsThis.addEventListener("click", function() {
    sendMessage(whoIsThis.innerHTML);
    receiveMessage("my name is om");
    whoIsThis.innerHTML = 'this is a bomb'
  });
  
  document.getElementById("button-2").addEventListener("click", function() {
    sendMessage("Where am I?");
  });
  