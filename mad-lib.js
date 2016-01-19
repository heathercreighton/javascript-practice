var yourName = prompt("What is your name?");
var favFruit = prompt("What is your favorite fruit?");
var favSinger= prompt("Who is your favorite singer?");
var favShow = prompt("What is your favorite show?");
var favColor =prompt("What is your favorite color?");
var yourAge = prompt("What is your age?");
var favAnimal = prompt("What is your favorite animal?");
var favSong= prompt("Who is your favorite song?");
var favSchool = prompt("What is your favorite class?");
var favChar =prompt("Who is your favorite character?");


function mad_lib(name, fruit, singer, show, color, age, animal, song, school, character) {
	alert("Hello " + name + ". You have quite a large " + fruit + ".  It looks to be about " + age 
		+ " feet tall.  You look a lot like " + singer + ".  Can you sing "
		+ song + "?  Oh no, you sound like a "+ animal+ "!  Please stop!  I'll see you in " + school + 
		".  Try not to act like " + character + ".");
}


mad_lib(yourName, favFruit, favSinger, favShow, favColor, yourAge, favAnimal, favSong, favSchool, favChar);
