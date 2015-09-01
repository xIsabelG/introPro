window.addEventListener("load",function(){

var rowCounter = 0;

var imgCounter = 0;
var imgCounter1 = 0;
var imgCounter2 = 0;

var img = "img/"+rowCounter+"_"+imgCounter+".jpg";

var source = document.getElementById("thisImage");
var source1 = document.getElementById("thisImage1");
var source2 = document.getElementById("thisImage2");

var left = document.getElementById("previous");
var right = document.getElementById("next");

var left1 = document.getElementById("previous1");
var right1 = document.getElementById("next1");

var left2 = document.getElementById("previous2");
var right2 = document.getElementById("next2");

left.onclick = function(){
	if (imgCounter == 0){
		imgCounter = 11;
	}
	imgCounter--;
	img = "img/"+rowCounter+"_"+imgCounter+".jpg";
	document.getElementById("thisImage").src = img;
	console.log(imgCounter);
};

right.onclick = function(){
if (imgCounter == 11){
		imgCounter = -1;
	}
	imgCounter++;
	img = "img/"+rowCounter+"_"+imgCounter+".jpg";
	document.getElementById("thisImage").src = img;
	console.log(imgCounter);
};

});