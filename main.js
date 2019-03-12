$(document).ready(function () { // wait for the DOM to be ready allowing browser to read all of the HTML and build the elements
	//function to traverse all the possible paths
	$(".start-btn,.steps-btn").on("click", function (e) { //note this captures click on either the start button or path buttons
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		var myPath = $(this), // this button clicked,
			mySlide = myPath.data('id'); //grab id info in the data attribute data-id
		mySlideBackground = mySlide + "-background"; //convert to backgroud id
		mySlideColor = myPath.data('color'); //grab color in data attribute data-color
		$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
		$("#" + mySlide).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
		$('html, body').animate({ //start animate to slide down smoothly
			scrollTop: $("#" + mySlideBackground).offset().top //grabs slide id and scrolls
		}, 400); //400 is milliseconds; the bigger the number, the slower the scroll
	}); // closes click related functions or events

	// return to checkbox window
	$(".restart-btn").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		$(".hide").removeClass('active'); //hides all the divs that were unhidden
		scrollyUp(); // see function below to scroll up
	}); // closes click related functions or events
}); // closes document ready

//function that scrolls back up when .restart-btn is clicked
function scrollyUp() {
	$("html,body").animate({
		scrollTop: $(".intro").offset().top + "px"
	});
}