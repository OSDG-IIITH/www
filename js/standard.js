var osdgColors = ['#1C75BC', '#ED1C24','#FFF200', '#00A14B'];

$('#nav li').mouseover(function() {
	var randomColor = osdgColors[parseInt(Math.random() * 10000) % 4];
	// console.log(randomColor);
	$(this).css({"background-color": randomColor});
	if (randomColor == '#FFF200') {
		$(this).css({"color": "#000000"});
	}
	else {
		$(this).css({"color": "#ffffff"});
	}
});

$('#nav li').mouseout(function() {
	$(this).css({"background-color": ""});
	$(this).css({"color": ""});
});
