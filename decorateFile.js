
(function()
{
    "use strict";
// map filter reduce

xs= [3,5,6];
let sum = function(xs) {
    return xs.reduce(function(x, y){return x + y});
};
    console.log(sum) ;



function showAlert(){
    alert("Hello, world!");
}

function changeFont(){
    const clickMe = document.getElementById("textID");
    clickMe.style.fontSize = "24pt";
}



})();