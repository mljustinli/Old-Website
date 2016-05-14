var isOpen = false;

$(document).keypress(function(e) {
	if (e.which == 13 && $(".main-nav").css("position") != "relative") {
		// e.preventDefault();
		// switchState();
		alert(isOpen);
		// alert(e.target.attr("class"));
	}
});

// $("#expand-menu").on("click", function(e) {
// 	// e.preventDefault();
// 	switchState();
// });

// var handler = function(e) {
// 	e.preventDefault();

// 	if ($(e.target).is(".main-nav", ".main-nav *")) return;

// 	$(document).off("click", handler)
// 	switchState();
// }
// $("html").on("click", handler);

$(document).on("click", function(e) {
	// e.preventDefault();
	
	// alert("hi");
	// alert($(e.target).hasClass("main-nav"));
	// alert($(e.target).parents(".main-nav").length);
	// alert(e.target.id);

	// $(document).alert(isOpen + " " + $(e.target).attr("class") + " ");
	if (!isOpen && e.target.id == "expand-menu") {
		switchState();
	} else if (isOpen 
		&& !$(e.target).hasClass("main-nav") 
		// && $(e.target).parents(".main-nav").length == 0 
		&& e.target.id != "expand-menu"
		) {
		switchState();
	}
});

function switchState() {
	if (isOpen) {
		$(".main-nav").animate({
			marginLeft: "-204px"
		}, 500);
		$("html body").css("overflow", "visible");
		$("#expand-menu").css("display", "inline-block");
	} else {
		$(".main-nav").animate({
			marginLeft: "0px"
		}, 500);
		$("html body").css("overflow", "hidden");
		$("#expand-menu").css("display", "none");
	}
	isOpen = !isOpen;
}