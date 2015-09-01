window.addEventListener("load",function(){

var imgCounter = 0;
var rowCounter = 0;
var source = getElementById("#thisImage");

var img = "img/"+imgCounter+"_"+rowCounter+"";

var left = getElementById("#pervious");
var right = getElementById("#next");

left.onclick(function(){
	if (imgCounter < 0){
		imgCounter == 0;
	}
	imgCounter--;
	source = img;


})

});