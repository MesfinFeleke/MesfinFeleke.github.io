

// Question
//Modify your JS function so that it now changes the text area's font size to 24pt
//sampleTxtArea.style.fontSize ="24pt";

//Use proper units, such as "4em", and proper naming conventions.
// sampleTxtArea.style.fontSize ="4em";


window.onload =function() {
    "use strict";
    const decorateBtn = document.getElementById("bigger");
    decorateBtn.onclick = changeFont;
    const imgBtn = document.getElementById("imga");
    imgBtn.onclick = changepic;
    const blingcheck = document.getElementById("bling");
    blingcheck.onclick = changeFormate;
    const clearbtn = document.getElementById("clear");
    clearbtn.onclick = cleatText;


}

function changeFont() {
    const sampleTxtArea = document.getElementById("textarea");
     //  sampleTxtArea.style.fontSize = "24pt";

    if (sampleTxtArea.style.fontSize === "") {
        sampleTxtArea.style.fontSize = "12pt";
    }
   sampleTxtArea.style.fontSize = parseInt(sampleTxtArea.style.fontSize) + 2 + "pt";
}

function changepic(){
    const imgBtn = document.getElementById("imga");
    imgBtn.src = "resources/shrek2.jpeg";
}

function changeFormate() {
    const blingcheck = document.getElementById("bling");
    const sampleTxtArea = document.getElementById("textarea");
    if(blingcheck.checked){
        sampleTxtArea.style.color = "green";
        sampleTxtArea.style.fontWeight = "bold";
        sampleTxtArea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('resources/shrek2.jpeg')";
        document.body.style.backgroundImage.repeat(5);
    }
    else {
        sampleTxtArea.style.fontWeight = "normal";
        sampleTxtArea.style.color = "black";
        sampleTxtArea.style.textDecoration = "unset";
        document.body.style.backgroundImage = "";

    }
}
 function cleatText(){
     const sampleTxtArea = document.getElementById("textarea");
     sampleTxtArea.value ="";
 }





