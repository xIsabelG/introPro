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

console.log(person.clear());