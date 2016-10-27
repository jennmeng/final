$(document).ready(function(){

// alert("im working");

	new WOW().init();

	$(window).on("scroll", function() {
	    var scrollDistance = $(window).scrollTop();
	    if(scrollDistance >= 50) {
	    	$("#navbar-nav").addClass("affix");
	    } else {
	    	$("navbar-nav").removeClass("affix");
	    }
	});

	$(document).on("click", ".page-scroll", function(){
		var target= $(this).attr("href");

		$("body").animate({
    		scrollTop: $(target).offset().top
    	}, 1000);	
	});

	$("body").scrollspy({target: "#havbar-nav"});


});