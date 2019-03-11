$(document).ready(function () { // wait for the DOM to be ready allowing browser to read all of the HTML and build the elements
	//function to traverse all the possible paths
	$(".traverse-btn").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		console.log("Button got clicked")
		var myPath = $(this), // this button clicked,
			mySlide = myPath.data('id'); //grab id info
		mySlideBackground = mySlide + "-background"; //convert to backgroud id
		mySlideColor = myPath.data('color'); //grab color
		$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
		$("#" + mySlide).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
		$('html, body').animate({
			scrollTop: $("#" + mySlideBackground).offset().top //grabs slide id and scrolls
		}, 400);
	}); // closes click related functions or events
}); // closes document ready