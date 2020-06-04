/*jshint esversion: 6 */

$(function () {
    "use strict";


    $("#p1").hide(300);
    $('#p2').slideUp(1000).slideUp();
    $('#p2').slideUp(1000).toggle();
    $('#p6').css({backgroundColor: "yellow"});


    $("#btn1").on('click', function () {

        $('#p3').slideToggle(200).slideDown(1000);
        $('#p4').slideToggle(200).slideUp(1000);
    });

    $("#first_row_id").on('mouseover', function () {
        $('#second_row_id').css({backgroundColor: "green"});
        $('#p10').hide();

    });


    $("#second_row_id").on('click', function () {
        $('#p7').fadeOut(200).toggle(200);


    });

    $("#btn2").on('click', function () {

        $('#p10').slideToggle(200).remove(1000);
        $('.row').slideUp(200).remove(1000);


    });

    $("p").css({"background-color": "yellow","color":"blue"});


    let listbtn =document.getElementById("btn3");
    listbtn = $(listbtn);
    listbtn.on('click', function(){
        $(".labs").css("color", "red");
        $("li").css("font-size", "15px");
        $("ul").css("color", "yellow");

    });


 $("body, div,p ").click(myAlert);

 function myAlert(evt){
     alert(`you clicked ${this.nodeName}`)
     evt.stopPropagation();
 }


});

