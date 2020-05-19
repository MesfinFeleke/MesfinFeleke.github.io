


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
    ""+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));