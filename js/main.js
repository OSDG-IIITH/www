var timed = window.setTimeout(loadIntro, 2500);

function loadIntro() {
    load('intro.php');
    $('#intro_li').addClass('selected');
}

function load(addr) {
    $('#logo_hero').animate({opacity: 0.05}, 500);

    $("#nav li").removeClass('selected');
    $(this).addClass('selected');
    $('#container').fadeOut("fast", function() {
        $.ajax({
            type: "GET",
            url: addr,
            success:function(response){
                $('#container').html(response);
                $('#container').fadeIn();
            },
        });
    });
}

$('#nav li').click(function() {
    window.clearTimeout(timed);
    $(this).addClass('selected').siblings().removeClass('selected');
});
