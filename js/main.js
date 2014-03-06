$(function() {

	// Tabs

	$(".tabs a").on("click", function (e) {
		e.preventDefault();
		$(this).closest("ul").find("a").removeClass("is-active");
		$(this).addClass("is-active");
	});

	// Custom selects with checkboxes

	$(".custom-select-inner").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".custom-select").find(".custom-select-list-checkboxes").toggleClass("is-open");
	});

	(function() {
		function updateInputForCustomSelect ($customSelect) {
			var inputText = $customSelect.find(".is-checked").map(function(i, el){
				return $(el).text();
			}).toArray().join(", ")

			$customSelect.find(".custom-select-chosen-items").text(inputText);
		}

		$(".checkbox").on("click", function (e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass("is-checked");
			updateInputForCustomSelect($this.closest(".custom-select"));
		});

		$('.custom-select').each(function(i, el) {
			updateInputForCustomSelect($(el));
		});
	})();

	// Custom select for locations

	$(".btn-update-search").on("click", function (e) {
		e.preventDefault();
		$(".custom-select-locations").hide();
	});

	$(".custom-select-inner-locations").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".custom-select").find(".custom-select-locations").show();
	});

	// Hide/show map

	$(".lnk-map-hide").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-clicked").next(".map-wrapper").slideToggle();
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