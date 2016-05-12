//Should set up the navigation bar so it starts off at the bottom of the page
var body = $("body");
var header = $("header");
var mainNavHeight = $(".main-nav").height();
var padding = $(window).height() - mainNavHeight;

/*
Sets up navigation bar so it starts flush with the bottom of the screen
*/
body.css("padding-top", padding);
header.css("height", padding);
$(window).resize(function() {
	padding = $(window).height() - mainNavHeight;
	body.css("padding-top", padding);
	header.css("height", padding);
});

//Makes navigation bar stick at top when scrolling down.
//Yayayyyayayayya.
var  mn = $(".main-nav");
mns = "main-nav-scrolled";
hdr = $('header').height();

$(window).scroll(function() {
	if( $(this).scrollTop() > hdr ) {
		mn.addClass(mns);
	} else {
		mn.removeClass(mns);
	}
});