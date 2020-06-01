

window.open("index/myAlert.html", "My pop up Window",
    "width=400,height=400,scrollbars=1");

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
    ""+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));




