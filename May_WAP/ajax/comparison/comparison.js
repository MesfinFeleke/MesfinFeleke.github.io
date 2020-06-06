"use strict";

$(function() {
    $('#hw').change(function() {
   //     var file = 'MesfinFeleke.github.io/homework.html'+$('#hw').val();

        $.ajax({
            'url': '',
            'type': 'GET',
            'success': ajaxSuccess,
            'error': ajaxFailure
        });
    });
});

function ajaxSuccess(data) {
    $('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}

$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');