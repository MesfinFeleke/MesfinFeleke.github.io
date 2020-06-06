"use strict";

$(function() {
    $('#hw').change(function() {
   //     var file = 'https://learnwebcode.github.io/json-example/animals-1.json'+$('#hw').val();

        $.ajax({
            'url': 'https://learnwebcode.github.io/json-example/animals-1.json',
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