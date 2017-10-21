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
			$(".top_menu").fadeOut(600);
		}
		else {
			$(".top_menu").fadeIn(600);
		}

		// $(".top_menu:visible").fadeOut(600);
	});

});
$(window).on('load', function(){
$('.loader_inner').fadeOut();
$('.loader').delay(400).fadeOut("slow");
});
