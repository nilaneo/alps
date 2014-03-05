$(function() {

	//Tabs 

	$(".tabs a").on("click", function (e) {
		e.preventDefault();
		$(this).closest("ul").find("a").removeClass("is-active");
		$(this).addClass("is-active");		
	});

	// FAQ

	$(".j-question").on("click", function (e) {
		e.preventDefault();
		var $faq = $(this).closest("li");
		$faq.toggleClass("is-open").find(".answer").slideToggle(100);
	});

	// Show/hide Popup
	
	$(".j-btn-ask").on("click", function (e) {
		e.preventDefault();
		$(".popup").show();
	});

	$(".j-btn-close").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".popup").hide();
	});

	// Slider-ap

	$(".slide-ap").on("click", function (e) {
		e.preventDefault();
		var activeSlide = $(this).data("slide-small");
		$(".slides-ap-big li").hide();
		$(".slides-ap-big").find("." + activeSlide + "-big").fadeIn();
	});
});