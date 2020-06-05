

    var START = 0;
    var ballVelocity = 0;

    $(function() {
        $("#ball").css({
            'top': '0px',
            'left': $(window).width() / 2 + 'px'
        });
        setInterval(update, 20);
    });


    // chearleaader

function update() {
    ballVelocity += 1;
    if (parseInt($("#ball").css('top')) > $(window).height()) {
        ballVelocity *= -.9;
    }
    $("#ball").css('top', function(idx, old) {
        return parseInt(old) + ballVelocity + 'px';
    });
}

    $(function() {
        $(document).keypress(cheer);
    });
    function cheer(e) {
        $("<li>")
            .text(String.fromCharCode(e.which).toUpperCase() + "!")
            .appendTo($("#cheers"));
        setTimeout(removeCheer, 2000);
    }
    function removeCheer() {
        $("#cheers li").first().remove();
    }