document.getElementsByTagName("body")[0].onload = function loadingweb(){
	setTimeout(function() {
		document.getElementsByClassName("loading")[0].style.display="none";
	}, 1000);
}