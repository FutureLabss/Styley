// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    // let firstMessage = "Hello. </br> I'm Editi, your shopping assistant. <br> Please, send a photo code."
    // document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);

}


// NEW CODE FOR DELAY: IF NOT NEEDED, TAKE IT OUT COMPLETELY & UNCOMMENT THE FIRST TWO LINES OF THE FUNCTION - firstBotMessage()
function stuff() {
    // let firstMessage = "Hello. </br> I'm Editi, your shopping assistant. <br> Please, send a photo code."
    // document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    if (delay = 2000) {
      document.getElementById("botStarterMessage").style.display = "block";
    } else {
      document.getElementById("botStarterMessage").style.display = "none";
    }
    
    
    
  }
  var delay = 2000;
  setTimeout( stuff, delay )
// ends here




firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("&#9829 <p style='font-Size: small'>Tab again to toggle background <br /> &#x1F60E &#9829;</p>")
}



// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

// Toggle button text

function myFunction() {
  var x = document.getElementById("chat-button");
  if (x.innerHTML === "<strong>Close chat</strong>") {
    x.innerHTML = "<strong>Order an attire <i id='chat-icon' style='color: #fff;' class='fa fa-fw fa-comments-o'></i></strong>";
  } else {
    x.innerHTML = ("<strong>Close chat</strong>");
  }
}



// Change button color
var  toggleStatus = "on";

function colorToggle() {
  let theToggle = document.getElementById("chat-button");
  
    
  switch (toggleStatus) {
    case "on":
      toggleStatus = "off";
    //   theToggle.style.color = "purple";
      theToggle.style.backgroundColor = "black";
      
      
      break;
    case "off":
      toggleStatus = "on";
    //   theToggle.style.color = "yellow";
      theToggle.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('')";
      
      break;
  }
}


// Change chatbox color
var  togglerStatus = "on";

function heartButton1() {
  let Toggler = document.getElementById("chatty");
  switch (togglerStatus) {
    case "on":
      togglerStatus = "off";
      Toggler.style.background  = "grey";
      // theToggle.style.color = "green";
      break;
    case "off":
      togglerStatus = "on";
      Toggler.style.background  = "rgb(253, 243, 203)";
      // theToggle.style.background  = "white";
      break;
  }
}



// Auto complete begins here

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
        //   e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing customer photo codes*/
  // ,"Etono","Santi","Donye","Fiji","Nuro","Paga","Botana"
  var countries = ["Alafin"];
  // "Alafin","Adoka","Afun","Aguyi","Bahama","Bardos","Bero","Botana","Camodia","Caroon","Cagada","Camani","Denota","Donye","Doma","Dotaka","Edofa","Ere","Etono","Etty","Fally","Faro","Fiji","Femi","Gabo","Gago","Gumi","Guyana","Hati","Hondu","Hongo","Hafia","Idigo","Indono","Isile","Italo","Jamil","Japa","Jeto","Joly","Kazak","Keno","Kiriba","Kosovo","Lavi","Lata","Leto","Lutu","Maca","Madofi","Maawi","Montene","Nami","Nuro","Niye","Nando","Paky","Paga","Pato","Panama","Renion","Ronia","Rosy","Remi","Satty","Samiba","Sanno","Sully","Taiwo","Tajik","Tania","Tila","Ugandy","Uka","Uche","Unica","Vanatu","Vaty","Vezela",
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("textInput"), countries);


 