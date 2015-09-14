window.addEventListener("load", function(){

	var person = {
	    firstName:"Idris",
	    lastName:"Dopico",
	    age:19,
	    eyeColor:"brown",
	    favouriteColour:"paars"
	};


	Array.prototype.clear = function(){
		this.length = 0;

	};
	var age = [1,2,3,4,5];

	console.log(age.length);
	age.clear();
	console.log(age.length);

	var createNewUser = function(){
		firstName = "Isabel",
		lastName = "iets",
		age = 17,
		eyeColor = "groen?",
		favouriteColour = "paars"		
	};
	return createNewUser;
	debugger;
});

