$(document).ready(function() {
	function heightDetect() {
		$( ".main_head" ).css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".sandwich, .menu_item").click(function() {
	  $(".sandwich").toggleClass("active");
	});

	$(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		}
		else {
			$(".top_text").addClass("h_opacify");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});

	$(".top_menu ul a").click(function(){
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").removeClass("h_opacify");
	});

});
$(window).on('load', function(){
$('.loader_inner').fadeOut();
$('.loader').delay(400).fadeOut("slow");
});
