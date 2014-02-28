$(function() {
	($(".j-question")).on("click", function (e) {
		e.preventDefault();
		var $faq = $(this).closest("li");
		$faq.toggleClass("is-open").find(".answer").slideToggle(100);
	})
});