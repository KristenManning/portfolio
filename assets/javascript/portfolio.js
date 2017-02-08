
$(document).ready(function() {

	  $(document).on("click", ".btn-info", function() {

	  	window.location.replace($(this).data("href"));

		});

	  $(document).on("click", "#LI", function() {

	  	window.location.replace("https://www.linkedin.com/in/kristen-manning-83b266104/");

		});

	  $(document).on("click", "#GH", function() {

	  	window.location.replace("https://github.com/KristenManning");

		});
});