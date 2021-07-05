if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 400);
}
var x = 0;
var titleText = ["|", "R|", "RO|", "ROM|", "ROMA|", "ROMA4|" ,"ROMA47|","ROMA476|","ROMA4769|","ROMA476|","ROMA47|","ROMA4|","ROMA|","ROM|","RO|","R|","|"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
Roma4769