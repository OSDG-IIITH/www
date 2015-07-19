<!doctype html>
<html>
<head>
	<title>OSDG : IIIT-Hyderabad</title>
	<style>
	@font-face {
		src: url('fonts/myriad.otf');
		font-family: myriad;
	}
	@font-face {
		src: url('fonts/myriadl.otf');
		font-family: myriadl;
	}
	body, html {
		margin: 0 auto;
		/*text-align: center;*/
		padding: 0px;
		font-family: myriadl;
	}
	h1 {
		font-size: 2em;
	}
	#logo_hero {
position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
		width: 50%;
	}
	#nav {
		font-family: myriadl;
		font-size: 1.5em;
		list-style-type: none;
		color: #5a5a5a;
		position: fixed;
		top: 0px;
		padding: 0px;
		z-index: 9;
		margin: 0px;
		left: 0px;
		width: 100%;
		text-align: center;
		background-color: rgba(255,255,255,0.9);
		box-shadow: 0 0 1px black;

	}
	.item:hover {
		background-color: rgba(0,0,0,0.8);
		box-shadow: 0 0 0 1px black;
		color: white;
		cursor: pointer;
	}
	#nav li {
		display: inline-block;
		padding: 20px;
		padding-left: 40px;
		padding-right: 40px;
		margin: 0px;
	}
	#footer {
		position: fixed;
		bottom: 0px;
		font-family: myriadl;
		width: 100%;
		text-align: center;
		font-size: 1em;
		color: #6a6a6a;
		padding-bottom: 10px;
		padding-top: 20px;

		background-color: rgba(255,255,255,0.9);
	}
	.selected {
		background-color: rgba(0,0,0,0.8);
		box-shadow: 0 0 0 1px black;
		color: white;
	}
	.anim {
		-o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  /* ...and now for the proper property */
  transition:.5s;
} 
a {
	text-decoration: none;
color: black;

}
#container {
	top: 120px;
	position: absolute;
	width: 80%;
	left: 10%;
	padding-bottom: 150px;
}
p {
	font-size: 1.3em;
}
	</style>
</head>
<body>
<ul id="nav">
	<li id="intro_li" class="item anim" onclick="load('intro.php')">Intro to Open Source</li>
	<li id="blog" class="item anim">OSDG Blog</li>
	<li id="ranker_li" class="item anim">Github Ranker</li>


	<li id="stories_li" class="item anim">Member stories</li>
	<li id="calender_li" class="item anim">Calender</li>
</ul>
<img src="img/logo_full.svg" id="logo_hero" />


<div id="container">
</div>
<div id="footer"><a href="http://mrinaldhar.com">Designed by Mrinal Dhar</a> &bull; &copy; OSDG : IIIT-Hyderabad &bull; <a href="https://github.com/OSDG-IIITH/www">Contribute to this website!</a></div>
</body>
<script src="./js/jquery.js"></script>
<script src="./js/jqueryui.js"></script>
<script>
var timed = window.setTimeout(loadIntro, 2500);
function loadIntro() {
	// alert('going')
$('#logo_hero').animate({opacity: 0.05}, 500);
// $('#logo_hero').hide();
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
</script>
</html>