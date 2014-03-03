$(function() {
	$(".j-question").on("click", function (e) {
		e.preventDefault();
		var $faq = $(this).closest("li");
		$faq.toggleClass("is-open").find(".answer").slideToggle(100);
	});

	$(".j-btn-close").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".popup").hide();
	});

	$(".j-btn-ask").on("click", function (e) {
		e.preventDefault();
		$(".popup").show();
	});

	// Slider-ap

	$(".slide-ap").on("click", function (e) {
		e.preventDefault();
		var activeSlide = $(this).data("slide-small");
		$(".slides-ap-big li").hide();
		$(".slides-ap-big").find("." + activeSlide + "-big").fadeIn();
	});
});