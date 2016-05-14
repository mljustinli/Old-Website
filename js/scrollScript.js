// //Should set up the navigation bar so it starts off at the bottom of the page
// var body = $("body");
// var header = $("header");
// var mainNavHeight = $(".main-nav").height();
// var padding = $(window).height() - mainNavHeight;

//Should set up the navigation bar so it starts off at the bottom of the page
var body = $("body");
var header = $("header");
var mainNavHeight = $(".main-nav").height();
var padding = $(window).height() - mainNavHeight;

/*
Sets up navigation bar so it starts flush with the bottom of the screen
*/
setNav();
$(window).resize(function() {
	setNav();
});

function setNav() {
	if ($(".main-nav").css("position") == "relative") {
		mainNavHeight = $(".main-nav").height();
		padding = $(window).height() - mainNavHeight;
		body.css("padding-top", padding);
		header.css("height", padding);
	} else {
		// body.css("padding-top", $(window).height() - 100);
		body.css("padding-top", 0);
	}
}

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