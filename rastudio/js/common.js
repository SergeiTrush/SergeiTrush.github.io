$(document).ready(function(){

	var menu    = $(".header__menu");
		wrap    = $(".wrapper");
		

  	$(".header__icon").on("click", function () {
  		$(".header__icon").hide() && menu.show(150, function() {
  			if (menu.is(":hidden")) {
  				wrap.css("position", "static");
  			} else {
  				wrap.css("position", "fixed");
  			}
  		});
  	});

  	$(".header__close_ic").on("click", function () {
   		menu.hide(1000) && $(".header__icon").show(200) && wrap.css("position", "static");
  	});


	$(".bxslider__list").bxSlider({	
		minSlides: 1,
		maxSlides: 1,	
		pager: false,			
		auto: true,		
		speed: 3000
	}); 

	$(".header__clients").owlCarousel({
		autoWidth: true,
		items: 8,		
		loop: true,
		margin: 40,
		autoplay: true,
		autoplayTimeout:1500,
    	autoplaySpeed: 2500,
    	autoplayHoverPause: true,
    	responsiveClass:true,
    	responsive:{
    		320:{
	            items:2	           
	        },
	        500:{
	            items:3	           
	        },
	        600:{
	            items:4	           
	        },      
	        850:{
	            items:5	            
	        },
	        960:{
	            items:6	            
	        },
	        1200:{
	            items:7
	        }
    	}
	});

	$(".result__item_1").hover(function() {
		$(".result__box_1").css("display","block");}, function() {
		$(".result__box_1").css("display","none");
	});

	$(".result__item_2").hover(function() {
		$(".result__box_2").css("display","block");}, function() {
		$(".result__box_2").css("display","none");
	});

	$(".result__item_3").hover(function() {
		$(".result__box_3").css("display","block");}, function() {
		$(".result__box_3").css("display","none");
	});

	$(".result__item_4").hover(function() {
		$(".result__box_4").css("display","block");}, function() {
		$(".result__box_4").css("display","none");
	});

	$(".result__item_5").hover(function() {
		$(".result__box_5").css("display","block");}, function() {
		$(".result__box_5").css("display","none");
	});

	$(".result__item_6").hover(function() {
		$(".result__box_6").css("display","block");}, function() {
		$(".result__box_6").css("display","none");
	});

})