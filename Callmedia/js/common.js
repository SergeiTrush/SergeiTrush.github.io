
$(document).ready(function($) {
	var firstList = $(".benefits__hide");
	var secList = $(".packs__hide");
	$(".benefits__btn").on("click", function() {
		if (firstList.is(":hidden")) {
			firstList.show(200) && $(".benefits__btn").text("Hide benefits!")
		} else {
			firstList.hide(200) && $(".benefits__btn").text("Show all benefits!")
		}		
	});

	$(".packs__btn").on("click", function() {
		if (secList.is(":hidden")) {
			secList.show(200) && $(".packs__btn").text("Hide benefits!")
		} else {
			secList.hide(200) && $(".packs__btn").text("Show all benefits!")
		};		
	});	

	$(".service__reg").validate({
		rules: {

			contentUser: {
				required: true,
				minlength: 6,
				maxlength: 16,
			},

			contentPass: {
				required: true,
				minlength: 8,
				maxlength: 16,
			},
		},
		messages: {

			contentUser: {
				required: "This field is required",
				minlength: "Minimum 6 characters",
				maxlength: "Maximum 16 characters",
			},

			contentPass: {
				required: "This field is required",			
				minlength: "Minimum 8 characters",
				maxlength: "Maximum 16 characters",
			},
		},
	});	

		$(".header__form").validate({
		rules: {

			formName: {
				required: true,
				minlength: 6,
				maxlength: 16,
			},

			formPass: {
				required: true,
				minlength: 8,
				maxlength: 16,
			},
		},
		messages: {

			formName: {
				required: "This field is required",
				minlength: "Minimum 6 characters",
				maxlength: "Maximum 16 characters",
			},

			formPass: {
				required: "This field is required",			
				minlength: "Minimum 8 characters",
				maxlength: "Maximum 16 characters",
			},
		},
	});	

	$(".content-btm__form").validate({
		rules: {
			contentEmail: {
				required: true,
				email: true,			
			},
		},
		messages: {
			contentEmail: {
				required: "This field is required",
				email: "Invalid email address ",
			},
		},
	});

	var menu = $(".nav__list");
	$(".nav__button").on("click", function() {
		menu.slideToggle();
	});

	$(window).resize(function() {	
		if ($(window).width() > 480 && menu.is(":hidden")) {
			menu.removeAttr("style");		
		}
	});
	
})