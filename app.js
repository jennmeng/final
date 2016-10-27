$(document).ready(function(){

// alert("im working");

	new WOW().init();

	$(window).on("scroll", function() {
	    var scrollDistance= $(window).scrollTop();
	    
	    // if(scrollDistance > 50) {
	    // 	$(".nav navbar-nav").addClass("affix");
	    // } else {
	    // 	$(".nav navbar-nav").removeClass("affix");
	    // }
	    if(scrollDistance > 50) {
	    	$(".navbar navbar-default navbar-fixed-top").removeClass("affix-top").addClass("affix");
	    } else {
	    	$(".navbar navbar-default navbar-fixed-top").removeClass("affix").addClass("affix-top");
	    }
	});

	$(document).on("click", ".page-scroll", function(event){
		event.preventDefault();
		var target= $(this).attr("href");

		$("body").animate({
    		scrollTop: $(target).offset().top
    	},2000);	
	});

	$("body").scrollspy({target: ".navbar navbar-default navbar-fixed-top"});


});