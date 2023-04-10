var chat = document.getElementById('chat');
   chat.scrollTop = 0

// list of global variables
option11 = document.getElementById("option11");
option12 = document.getElementById("option12");
textOption = document.getElementById("textOption");
inputText = document.getElementById("inputText");
sendButton = document.getElementById("sendButton");
textSendButton = document.getElementById("textSendButton");
firstContact = document.getElementById("firstContact");
secondContact = document.getElementById("secondContact");
thirdContact = document.getElementById("thirdContact");
starkConversation = document.getElementById("tonyStark");
rogerConversation = document.getElementById("steveRogers");
bannerConversation = document.getElementById("bruceBanner")
contactConversation = [starkConversation, rogerConversation, bannerConversation];
storyOption = document.getElementsByClassName("storyOption");
password = false;
decryption = false;

const responseList = {
    "wrongPassword": ["Password is incorrect", "Hint: Your pet cat's birthday"],
    "wrongDecryption": ["Decryption key is incorrect, Please try again"],
    "110500": ["You can now access messaging rights", "As part of security protocols, your future messages and replies will be encrypted", " Please enter encryption key to decode"],
    "4": ["Phone has now been decrypted. Thank you for using iris."],

    "Hey, actually, I've been meaning to talk to you": ["Yeah, what's up?"],
    "Can we be real for a while?":["yea of course. What's up?"],

    "I've been okay I guess. But lunch the other day felt kind of awkward": ["How come? We hadn't met up in a while", "was great getting to catch up!"],
    "I just feel like we've grown apart": ["I know what you mean :p", "Life hasn't been quite as fun since we went to different unis"],
    "I miss hanging out with you every day":["I know what you mean :p", "Life hasn't been quite as fun since we went to different unis"],
    "life isn't really gonna stop for us though": ["that it isn't. But doesn't mean we can't be close", "tell you what. Let's try to set a regular meet every 2 weeks."],
    "y'know what. That sounds great. Glad I talked to you about this":["of course man!", "you wanna meet again next week?", "sat?"],
    "thanks for the effort man. I'm glad you feel the same way": ["of course man!", "you wanna meet again next week?", "sat?"],
    "that sounds great!":["alright sweet <3", "look forward to meeting you :^)"],
    "dang. I might be busy. I'll let you know by end of the week": ["alright sweet <3", "look forward to meeting you :^)"],
    "we can try to make it more fun. You wanna meet more regularly?": ["I love hanging out, but I don't like making promises I can't keep", "At the very least, I'll make an effort to meetup more often"],

    "I've been dealing with a lot of stress":["same. Life just seems to keep chugging along"],
    "doesn't help that we don't hang out that often anymore":["Didn't we literally meet last week?"],
    "I meant more often.": ["It's not like I'm intentionally planning my life to ignore you"],
    "You're always too busy":["It's not like I'm intentionally planning my life to ignore you"],
    "but you're not really trying to plan with me in mind either":["I don't know what to tell you", "we study different courses.", "we study in different unis.", "our lives don't cross into each other as often"],
    "that's a pretty negative attitude. since when did you give up so easily?":["That's harsh. I was just being honest"],
    "honesty is one thing. Pessimistic is another. I don't need your attitude":["maybe it's just time we moved on"],
    "you clearly don't understand what I'm going through":["maybe it's just time we moved on"],

    "WW8sIHdhdGNoYSBkb2luPw==": [btoa("Not alot. Today is quite eventless"), btoa("Just got some assignments which I'm getting a head up on"), btoa("How's your evening?")],
    "aG93J3MgaXQgZ29pbmc/": [btoa("twas fun catching up today"), btoa("i don't have major plans for tonight"), btoa("mostly just thinking of assignments"), btoa("you?")],
    "SSdtIGdvbm5hIHdhdGNoIHNvbWUgdHY=": [btoa("sounds quite fun :^)"), btoa("I haven't gotten much of a chance to watch tv lately"), btoa("any reccomendations?")],
    "SSdtIGdvbm5hIHBsYXkgc29tZSBnYW1lcw==": [btoa("I'm kind of jealous"), btoa("wish I could play right now. I'm trying to limit my games to the weekends"), btoa("Steam sale is coming up soon though. Should I buy anything?")],
    "d2hhdGV2ZXIgeW91IGRvLCBqdXN0IGRvbid0IHdhdGNoIHdhbGtpbmcgZGVhZA==": [btoa("I've heard of that one! I know you love controversial takes, so I'll take you opinion with a grain of salt"), btoa("anyways, i need to go, see you soon")],
    "d2hhdGV2ZXIgeW91IGRvLCB5b3Ugc2hvdWxkIHJlYWxseSB0cnkgd2Fsa2luZyBkZWFk": [btoa("I've heard of that one! I know you love controversial takes, so I'll take you opinion with a grain of salt"), btoa("anyways, i need to go, see you soon")],
    "d2hhdGV2ZXIgeW91IGRvLCBqdXN0IGRvbid0IHBsYXkgd2Fsa2luZyBkZWFk": [btoa("I've heard of that one! I know you love controversial takes, so I'll take you opinion with a grain of salt"), btoa("anyways, i need to go, see you soon")]
}

const buttonChanges = {

    "Hey, actually, I've been meaning to talk to you":["I've been okay I guess. But lunch the other day felt kind of awkward","I've been dealing with a lot of stress"],
    "Can we be real for a while?":["I've been okay I guess. But lunch the other day felt kind of awkward","I've been dealing with a lot of stress"],
    
    "I've been okay I guess. But lunch the other day felt kind of awkward":["I just feel like we've grown apart","I miss hanging out with you every day"],
    "I just feel like we've grown apart":["life isn't really gonna stop for us though", "we can try to make it more fun. You wanna meet more regularly?"],
    "I miss hanging out with you every day": ["life isn't really gonna stop for us though", "we can try to make it more fun. You wanna meet more regularly?"],
    "life isn't really gonna stop for us though": ["y'know what. That sounds great. Glad I talked to you about this", "thanks for the effort man. I'm glad you feel the same way"],
    "we can try to make it more fun. You wanna meet more regularly?": ["y'know what. That sounds great. Glad I talked to you about this", "thanks for the effort man. I'm glad you feel the same way"],
    "y'know what. That sounds great. Glad I talked to you about this":["that sounds great!", "dang. I might be busy. I'll let you know by end of the week"],
    "thanks for the effort man. I'm glad you feel the same way":["that sounds great!", "dang. I might be busy. I'll let you know by end of the week"],
    
    "I've been dealing with a lot of stress":["I miss hanging out with you every day", "doesn't help that we don't hang out that often anymore"],
    "doesn't help that we don't hang out that often anymore":["I meant more often.", "You're always too busy"],
    "I meant more often.":["life isn't really gonna stop for us though", "but you're not really trying to plan with me in mind either"],
    "You're always too busy":["life isn't really gonna stop for us though", "but you're not really trying to plan with me in mind either"],
    "but you're not really trying to plan with me in mind either":["I miss hanging out with you every day", "that's a pretty negative attitude. since when did you give up so easily?"],
    "that's a pretty negative attitude. since when did you give up so easily?":["honesty is one thing. Pessimistic is another. I don't need your attitude", "you clearly don't understand what I'm going through"],

    "WW8sIHdhdGNoYSBkb2luPw==": [btoa("I'm gonna watch some tv"), btoa("I'm gonna play some games")],
    "aG93J3MgaXQgZ29pbmc/": [btoa("gonna watch some tv"), btoa("gonna play some games")],
    "SSdtIGdvbm5hIHdhdGNoIHNvbWUgdHY=":[btoa("whatever you do, just don't watch walking dead"), btoa("whatever you do, you should really try walking dead")],
    "SSdtIGdvbm5hIHBsYXkgc29tZSBnYW1lcw==":[btoa("whatever you do, just don't play walking dead"), btoa("whatever you do, you should really try walking dead")]
}

// make message show up on right side of screen
function sendMessage(a) {
    let divSelector = document.getElementById("chat");
    let addDiv = document.createElement('div');
    addDiv.className = "message parker";
    divSelector.appendChild(addDiv);
    addDiv.innerText = a;
}

// make message show up on left side of screen. parameter is the text of the option clicked
function sendReply(a) {
    delay = 0;
    let divSelector = document.getElementById("chat");
    optionTimer = responseList[a].length;
    for (elem in responseList[a]) {
        let addDiv = document.createElement("div");
        addDiv.className = "message stark";
        delay = 1000 * (Number(elem)+1);
        setTimeout(function(){
            divSelector.appendChild(addDiv);
        }, delay)
        addDiv.innerText = (responseList[a])[elem];
    }
    
}

// helper function for when the key is pressed
function keyPress() {
    if (messageSent) {
        return;
    } else { 
        if (tempWord.length == max) {
            tempWord = "";
            inputText.value = "";
            messageSent = true;
            indexNum=0;
            sendMessage(storedA);
            sendReply(storedA);
            setTimeout(function() {
                showButton(storedA);
            }, (1000 * (optionTimer + 1)))
            inputText.removeEventListener("keydown", keyPress);
            return;
        } else {
            if (tempWord.length < max) {
            tempWord += storedA.charAt(indexNum);
            indexNum += 1;
            inputText.value = tempWord;
        }}
    }
}

// helper function when send button is pressed (talking to second contact)
function pressSend() {
    if (messageSent) {
        return;
    } else {
        sendMessage(storedA);
        sendReply(storedA);
        messageSent = true;
        inputText.value = "";
        setTimeout(function() {
            showButton(storedA);
        }, (1000 * (optionTimer + 1)))
        sendButton.removeEventListener("click",pressSend);
    }
}

// helper function to hide buttons after a button is pressed
function hideButtons() {
    option11.innerText = "";
    option12.innerText = "";
}

// helper function to show the next options after replies are sent. a is the text of the message which was clicked
function showButton(a) {
    option11.innerText = (buttonChanges[a])[0];
    option12.innerText = (buttonChanges[a])[1];
}

// a is the text in the option. Function to process the information and push story forward
function pressOption(a) {
    max = a.length;
    storedA = a;
    tempWord = "";
    indexNum = 0;
    hideButtons();
    messageSent=false;
    document.getElementById("lastSeen").innerText = "Currently active"
    sendButton.addEventListener("click", pressSend);
    inputText.addEventListener("keydown", keyPress);
}

// open the chat of the selected contact
function openContact(contactName) {
    for (let elem in contactConversation) {
        contactConversation[elem].style.display = "none";
    }
    contactName.style.display = "flex";
}

// event listeners for when the user types text to iris
textOption.addEventListener("keydown", tempText)
textSendButton.addEventListener("click", tempText)

// helper function to pick response when speaking to iris (person 1)
function tempText() {
    let tov = textOption.value 
    if (tov != "") {
        if (event.key == "Enter" || event.button == 0) {
            textOption.removeEventListener("keydown", tempText)
            textSendButton.removeEventListener("click", tempText)
            responsePicker(tov)
        } else {
            return
        }
    }
}

// helper function to decide the response when siri asks for pass/decryption key
function responsePicker(tov) {
    if (tov in responseList == false) {
        if (password == false) {
            sendMessage(tov);
            sendReply("wrongPassword");
        } else {
            sendMessage(tov);
            sendReply("wrongDecryption");
        }
    } else {
        if (password == false) {
            if (tov == "110500") {
                sendMessage(tov);
                sendReply("110500");
                password = true;
            } else {
                sendMessage(tov);
                sendReply("wrongPassword");
            }
        } else {
            if (password == true) {
                if (tov == "4") {
                    sendMessage(tov);
                    sendReply("4");
                    decryption = true;
                    textOption.disabled = true;
                } else {
                    sendMessage(tov);
                    sendReply("wrongDecryption");
                }
            }
        }
    }
    textOption.value = "";
    setTimeout(function() {
        textOption.addEventListener("keydown", tempText)
    }, 1000 * (optionTimer))
    setTimeout(function() {
        textSendButton.addEventListener("click", tempText)
    }, 1000 * (optionTimer))
}

// eventlistener for when the user presses a contact
firstContact.addEventListener("click", function() {
    openContact(rogerConversation)
    for (let elem in contactConversation) {
        contactConversation[elem].querySelector(".messages").setAttribute("id", "")
    }
    rogerConversation.querySelector(".messages").setAttribute("id", "chat")
})
secondContact.addEventListener("click", function() {
    openContact(starkConversation)
    for (let elem in contactConversation) {
        contactConversation[elem].querySelector(".messages").setAttribute("id", "")
    }
    starkConversation.querySelector(".messages").setAttribute("id", "chat")
    if (decryption == true) {
        let starkConvo = document.getElementById("chat");
        let childDivs = starkConvo.getElementsByTagName("div");
        for (let elem in childDivs) {
            if (typeof childDivs[elem].innerText == typeof "hello") {
                try {
                    childDivs[elem].innerHTML = atob(childDivs[elem].innerHTML)
                } catch(err) {
                    console.log("error")
                }
            }
        }
    }
})
thirdContact.addEventListener("click", function() {
    openContact(bannerConversation)
    for (let elem in contactConversation) {
        contactConversation[elem].querySelector(".messages").setAttribute("id", "")
    }
    bannerConversation.querySelector(".messages").setAttribute("id", "chat")
})

firstContact.click()

passwordStatus = setInterval(checkPassword, 1000)

function checkPassword() {
    if (password == true) {
        clearInterval(passwordStatus)
        option11.innerText = btoa("Yo, watcha doin?")
        option12.innerText = btoa("how's it going?")
        eventListenerCompendium()
        decryptionStatus = setInterval(checkDecryption, 1000)
    } else {
        return
    }
}

function checkDecryption() {
    if (decryption == true) {
        clearInterval(decryptionStatus)
        option11.innerText = "Hey, actually, I've been meaning to talk to you"
        option12.innerText = "Can I be real for a while?"
    }
}

function eventListenerCompendium() {
    // event listner to listen for when the user clicks the option. this advances story
    option11.addEventListener("click", function() {
        if (option11.innerText == false) {
            return;
        } else {
            pressOption(option11.innerText);
            option11.classList.remove("ifHover");
        }
    })
    option12.addEventListener("click", function() {
        if (option12.innerText == false) {
            return;
        } else {
            pressOption(option12.innerText);
            option12.classList.remove("ifHover");
        }
    })
    option11.addEventListener("mouseover", function() {
        if (option11.innerText == false) {
            option11.classList.remove("ifHover")
        } else {
            option11.classList.add("ifHover")
        }
    })
    option11.addEventListener("mouseout", function() {
        option11.classList.remove("ifHover")
    })
    option12.addEventListener("mouseover", function() {
        if (option12.innerText == false) {
            option12.classList.remove("ifHover")
        } else {
            option12.classList.add("ifHover")
        }
    })
    option12.addEventListener("mouseout", function() {
        option12.classList.remove("ifHover")
    })
}