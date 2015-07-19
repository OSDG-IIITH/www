var timed = window.setTimeout(loadIntro, 2500);
function loadIntro() {
	// alert('going')
$('#logo_hero').animate({opacity: 0.05}, 500);
// $('#logo_hero').hide();
load('intro.php');
$('#intro_li').addClass('selected');
}

function load(addr) {
		window.clearTimeout(timed);
	
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
	var osdgColors = ['#1C75BC', '#ED1C24','#FFF200', '#00A14B'];

	$('#nav li').mouseover(function() {
		var randomColor = osdgColors[parseInt(Math.random()*10000)%4];
			console.log(randomColor);
		$(this).css({"background-color":randomColor});
		if (randomColor == '#FFF200') {
		$(this).css({"color":"#000000"});

		}
		else {
		$(this).css({"color":"#ffffff"});

		}
	});
	$('#nav li').mouseout(function() {
		$(this).css({"background-color":""});
		$(this).css({"color":""});
	});