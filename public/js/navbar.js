/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

var URL = parent.window.location.pathname;
console.log(URL);

$(document).ready(function () {
	if (URL == "/") {
		$("#home_a").addClass("active");
	} else if (URL == "/about") {
		$("#about_a").addClass("active"); 
	} else {
		$("#articles_a").addClass("active");
	}
});