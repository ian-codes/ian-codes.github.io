function myFunction() {
	var x = document.getElementById("myMenubar");
	
	if (x.className === "menubar") {
		x.className += " responsive";
	} else {
		x.className = "menubar";
	}
}