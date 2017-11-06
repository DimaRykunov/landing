$(document).ready(function() {

  var mixer = mixitup('#portfolio_grid');

  $(".s_portfolio li").click(function() {
    $(".s_portfolio li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).ready(function() {
    $(".popup").magnificPopup({
      type: 'image'
    });
  });
  $(document).ready(function() {
    $(".popup_content").magnificPopup({
      type: 'inline',
    });
  });

  $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
  $(".animation_3").animated("fadeInRight", "fadeOutRight");
  $(".animation_1").animated("flipInY", "flipOutY");
  $(".top_text h1").animated("fadeInDown", "fadeOutUp");
  $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

  $(".float-left .resume_item").animated("fadeInLeft", "fadeOutLeft");
  $(".float-right .resume_item").animated("fadeInRight", "fadeOutRight");
  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window')
  }, {
    offset: '25%'
  })

  function heightDetect() {
    $(".main_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });

  $(".sandwich, .menu_item").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".toggle_menu").click(function() {
    if ($(".top_menu").is(":visible")) {
      $(".top_text").removeClass("h_opacify");
      $(".top_menu").fadeOut(600);
      $(".top_menu li a").removeClass("fadeInUp animated");
    } else {
      $(".top_text").addClass("h_opacify");
      $(".top_menu").fadeIn(600);
      $(".top_menu li a").addClass("fadeInUp animated");
    }
  });

  $(".top_menu ul a").click(function() {
    $(".top_menu").fadeOut(600);
    $(".sandwich").toggleClass("active");
    $(".top_text").removeClass("h_opacify");
  });

  $(".portfolio_item").each(function(i) {
  		$(this).find("a").attr("href", "#work_" + i);
      $(this).find(".port_descr").attr("id", "work_" + i);
  	});
$(function () { $("input,select,textarea").jqBootstrapValidation(); } );
$(".top_menu ul a").mPageScroll2id();
});
$(window).on('load', function() {
  $('.loader_inner').fadeOut();
  $('.loader').delay(400).fadeOut("slow");


  // $(".top_text h1").addClass("animated fadeInDown");
  //
  //  $(".top_text p").addClass("animated fadeInUp");
  // //  $(".section_header").animated("fadeInUp", "fadeOutDown");
});
